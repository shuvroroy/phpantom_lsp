//! Whether PHP's free-form date parser (`timelib_strtotime()`, behind
//! `strtotime()`, `date_create()` and `new DateTime()`) accepts a string.
//!
//! A port of the scanner in timelib's `parse_date.re`: the same token
//! rules, matched longest first with ties going to the earlier rule (as
//! re2c does), and the bookkeeping of each rule's action that can report
//! an error. Those errors are what make the calls return `false`: an
//! unexpected character, a second time or date, a third timezone, and a
//! timezone the database does not know. Warnings (an invalid date such as
//! `2020-02-31`) do not.
//!
//! Timezone identifiers are looked up in whichever database the PHP build
//! uses, so a word that might name one leaves the answer undecided rather
//! than guessing.

use std::cell::RefCell;
use std::sync::LazyLock;

use regex_automata::hybrid::dfa::{Cache, DFA, OverlappingState};
use regex_automata::nfa::thompson;
use regex_automata::util::syntax;
use regex_automata::{Anchored, Input, MatchKind};

/// Longer strings are left undecided, which keeps every relative offset a
/// string can add up to far from the overflow timelib reports as an error.
const MAX_LEN: usize = 256;

/// The named sub-expressions of `parse_date.re`. A `<name>` in a pattern
/// stands for the definition of that name.
const DEFINITIONS: &[(&str, &str)] = &[
    ("space", r"(?:[ \t]+|(?:\xC2\xA0)+|(?:\xE2\x80\xAF)+)"),
    ("frac", r"\.[0-9]+"),
    ("hour24", r"[01]?[0-9]|2[0-4]"),
    ("hour24lz", r"[01][0-9]|2[0-4]"),
    ("hour12", r"0?[1-9]|1[0-2]"),
    ("minute", r"[0-5]?[0-9]"),
    ("minutelz", r"[0-5][0-9]"),
    ("second", r"<minute>|60"),
    ("secondlz", r"<minutelz>|60"),
    ("meridian", r"[AaPp]\.?[Mm]\.?[\x00\t ]"),
    ("tz", r"\(?[A-Za-z]{1,6}\)?|[A-Z][a-z]+(?:[_/\-][A-Za-z]+)+"),
    (
        "tzcorrection",
        r"(?:GMT)?[+\-](?:<hour24>(?::?<minute>)?|<hour24lz><minutelz><secondlz>|<hour24lz>:<minutelz>:<secondlz>)",
    ),
    ("daysuf", r"st|nd|rd|th"),
    ("month", r"0?[0-9]|1[0-2]"),
    ("day", r"(?:[0-2]?[0-9]|3[01])(?:<daysuf>)?"),
    ("year", r"[0-9]{1,4}"),
    ("year2", r"[0-9]{2}"),
    ("year4", r"[0-9]{4}"),
    ("year4withsign", r"[+\-]?[0-9]{4}"),
    ("yearx", r"[+\-][0-9]{5,19}"),
    (
        "dayofyear",
        r"00[1-9]|0[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-6]",
    ),
    ("weekofyear", r"0[1-9]|[1-4][0-9]|5[0-3]"),
    ("monthlz", r"0[0-9]|1[0-2]"),
    ("daylz", r"0[0-9]|[1-2][0-9]|3[01]"),
    (
        "dayfulls",
        r"(?i:sundays|mondays|tuesdays|wednesdays|thursdays|fridays|saturdays)",
    ),
    (
        "dayfull",
        r"(?i:sunday|monday|tuesday|wednesday|thursday|friday|saturday)",
    ),
    ("dayabbr", r"(?i:sun|mon|tue|wed|thu|fri|sat)"),
    ("dayspecial", r"(?i:weekday|weekdays)"),
    ("daytext", r"<dayfulls>|<dayfull>|<dayabbr>|<dayspecial>"),
    (
        "monthfull",
        r"(?i:january|february|march|april|may|june|july|august|september|october|november|december)",
    ),
    (
        "monthabbr",
        r"(?i:jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)",
    ),
    ("monthroman", r"I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII"),
    ("monthtext", r"<monthfull>|<monthabbr>|<monthroman>"),
    ("timetiny12", r"<hour12>(?:<space>)?<meridian>"),
    (
        "timeshort12",
        r"<hour12>[:.]<minutelz>(?:<space>)?<meridian>",
    ),
    (
        "timelong12",
        r"<hour12>[:.]<minute>[:.]<secondlz>(?:<space>)?<meridian>",
    ),
    ("timetiny24", r"(?i:t)<hour24>"),
    ("timeshort24", r"(?i:t)?<hour24>[:.]<minute>"),
    ("timelong24", r"(?i:t)?<hour24>[:.]<minute>[:.]<second>"),
    (
        "iso8601long",
        r"(?i:t)?<hour24>[:.]<minute>[:.]<second><frac>",
    ),
    (
        "iso8601normtz",
        r"(?i:t)?<hour24>[:.]<minute>[:.]<secondlz>(?:<space>)?(?:<tzcorrection>|<tz>)",
    ),
    ("gnunocolon", r"(?i:t)?<hour24lz><minutelz>"),
    ("iso8601nocolon", r"(?i:t)?<hour24lz><minutelz><secondlz>"),
    ("americanshort", r"<month>/<day>"),
    ("american", r"<month>/<day>/<year>"),
    ("iso8601dateslash", r"<year4>/<monthlz>/<daylz>/?"),
    ("dateslash", r"<year4>/<month>/<day>"),
    ("iso8601date4", r"<year4withsign>-<monthlz>-<daylz>"),
    ("iso8601date2", r"<year2>-<monthlz>-<daylz>"),
    ("iso8601datex", r"<yearx>-<monthlz>-<daylz>"),
    ("gnudateshorter", r"<year4>-<month>"),
    ("gnudateshort", r"<year>-<month>-<day>"),
    ("pointeddate4", r"<day>[.\t\-]<month>[.\-]<year4>"),
    ("pointeddate2", r"<day>[.\t]<month>\.<year2>"),
    ("datefull", r"<day>[ \t.\-]*<monthtext>[ \t.\-]*<year>"),
    ("datenoday", r"<monthtext>[ .\t\-]*<year4>"),
    ("datenodayrev", r"<year4>[ .\t\-]*<monthtext>"),
    (
        "datetextual",
        r"<monthtext>[ .\t\-]*<day>[,.stndrh\t ]+<year>",
    ),
    (
        "datenoyear",
        r"<monthtext>[ .\t\-]*<day>(?:[,.stndrh\t ]+|\x00)",
    ),
    ("datenoyearrev", r"<day>[ .\t\-]*<monthtext>"),
    ("datenocolon", r"<year4><monthlz><daylz>"),
    (
        "soap",
        r"<year4>-<monthlz>-<daylz>T<hour24lz>:<minutelz>:<secondlz><frac>(?:<tzcorrection>)?",
    ),
    (
        "xmlrpc",
        r"<year4><monthlz><daylz>T<hour24>:<minutelz>:<secondlz>",
    ),
    (
        "xmlrpcnocolon",
        r"<year4><monthlz><daylz>(?i:t)<hour24><minutelz><secondlz>",
    ),
    ("wddx", r"<year4>-<month>-<day>T<hour24>:<minute>:<second>"),
    ("pgydotd", r"<year4>[.\-]?<dayofyear>"),
    ("pgtextshort", r"<monthabbr>-<daylz>-<year>"),
    ("pgtextreverse", r"<year>-<monthabbr>-<daylz>"),
    (
        "mssqltime",
        r"<hour12>:<minutelz>:<secondlz>[:.][0-9]+<meridian>",
    ),
    ("isoweekday", r"<year4>-?W<weekofyear>-?[0-7]"),
    ("isoweek", r"<year4>-?W<weekofyear>"),
    (
        "exif",
        r"<year4>:<monthlz>:<daylz> <hour24lz>:<minutelz>:<secondlz>",
    ),
    ("firstdayof", r"(?i:first day of)"),
    ("lastdayof", r"(?i:last day of)"),
    (
        "backof",
        r"(?i:back of )<hour24>(?:(?:<space>)?<meridian>)?",
    ),
    (
        "frontof",
        r"(?i:front of )<hour24>(?:(?:<space>)?<meridian>)?",
    ),
    (
        "clf",
        r"<day>/<monthabbr>/<year4>:<hour24lz>:<minutelz>:<secondlz><space><tzcorrection>",
    ),
    ("timestamp", r"@-?[0-9]+"),
    ("timestampms", r"@-?[0-9]+\.[0-9]{0,6}"),
    ("dateshortwithtimeshort12", r"<datenoyear><timeshort12>"),
    ("dateshortwithtimelong12", r"<datenoyear><timelong12>"),
    ("dateshortwithtimeshort", r"<datenoyear><timeshort24>"),
    ("dateshortwithtimelong", r"<datenoyear><timelong24>"),
    ("dateshortwithtimelongtz", r"<datenoyear><iso8601normtz>"),
    (
        "reltextnumber",
        r"(?i:first|second|third|fourth|fifth|sixth|seventh|eight|eighth|ninth|tenth|eleventh|twelfth)",
    ),
    ("reltexttext", r"(?i:next|last|previous|this)"),
    (
        "reltextunit",
        r"(?i:ms|\xC2\xB5s)|(?i:msec|millisecond|\xC2\xB5sec|microsecond|usec|sec|second|min|minute|hour|day|fortnight|forthnight|month|year)(?i:s)?|(?i:weeks)|<daytext>",
    ),
    ("relnumber", r"[+\-]*[ \t]*[0-9]{1,13}"),
    (
        "relative",
        r"<relnumber>(?:<space>)?(?:<reltextunit>|(?i:week))",
    ),
    (
        "relativetext",
        r"(?:<reltextnumber>|<reltexttext>)<space>(?:<reltextunit>)",
    ),
    ("relativetextweek", r"<reltexttext><space>(?i:week)"),
    (
        "weekdayof",
        r"(?:<reltextnumber>|<reltexttext>)<space>(?:<dayfulls>|<dayfull>|<dayabbr>)<space>(?i:of)",
    ),
];

/// The scanner's rules, in the order `parse_date.re` lists them, which is
/// the order that breaks a tie between two equally long matches.
#[derive(Clone, Copy, Debug, PartialEq)]
enum Rule {
    /// `yesterday`, `midnight`, `today` and `tomorrow`: they clear the time.
    ClearTime,
    Now,
    Noon,
    Timestamp,
    TimestampMs,
    FirstLastDayOf,
    BackFrontOf,
    WeekdayOf,
    /// A rule that only sets the time.
    Time,
    GnuNoColon,
    /// A rule that only sets the date.
    Date,
    /// An XML-RPC, SOAP, WDDX or EXIF date and time.
    DateTime,
    Clf,
    Year4,
    Ago,
    DayText,
    RelativeTextWeek,
    RelativeText,
    Zone,
    DateShortWithTime12,
    DateShortWithTime24,
    Relative,
    /// Separators, spaces and line ends, which the scanner skips.
    Skip,
}

const RULES: &[(Rule, &str)] = &[
    (Rule::ClearTime, r"(?i:yesterday)"),
    (Rule::Now, r"(?i:now)"),
    (Rule::Noon, r"(?i:noon)"),
    (Rule::ClearTime, r"(?i:midnight|today)"),
    (Rule::ClearTime, r"(?i:tomorrow)"),
    (Rule::Timestamp, r"<timestamp>"),
    (Rule::TimestampMs, r"<timestampms>"),
    (Rule::FirstLastDayOf, r"<firstdayof>|<lastdayof>"),
    (Rule::BackFrontOf, r"<backof>|<frontof>"),
    (Rule::WeekdayOf, r"<weekdayof>"),
    (Rule::Time, r"<timetiny12>|<timeshort12>|<timelong12>"),
    (Rule::Time, r"<mssqltime>"),
    (
        Rule::Time,
        r"<timetiny24>|<timeshort24>|<timelong24>|<iso8601long>",
    ),
    (Rule::GnuNoColon, r"<gnunocolon>"),
    (Rule::Time, r"<iso8601nocolon>"),
    (Rule::Date, r"<americanshort>|<american>"),
    (Rule::Date, r"<iso8601date4>|<iso8601dateslash>|<dateslash>"),
    (Rule::Date, r"<iso8601date2>"),
    (Rule::Date, r"<iso8601datex>"),
    (Rule::Date, r"<gnudateshorter>"),
    (Rule::Date, r"<gnudateshort>"),
    (Rule::Date, r"<datefull>"),
    (Rule::Date, r"<pointeddate4>"),
    (Rule::Date, r"<pointeddate2>"),
    (Rule::Date, r"<datenoday>"),
    (Rule::Date, r"<datenodayrev>"),
    (Rule::Date, r"<datetextual>|<datenoyear>"),
    (Rule::Date, r"<datenoyearrev>"),
    (Rule::Date, r"<datenocolon>"),
    (
        Rule::DateTime,
        r"<xmlrpc>|<xmlrpcnocolon>|<soap>|<wddx>|<exif>",
    ),
    (Rule::Date, r"<pgydotd>"),
    (Rule::Date, r"<isoweekday>"),
    (Rule::Date, r"<isoweek>"),
    (Rule::Date, r"<pgtextshort>"),
    (Rule::Date, r"<pgtextreverse>"),
    (Rule::Clf, r"<clf>"),
    (Rule::Year4, r"<year4>"),
    (Rule::Ago, r"(?i:ago)"),
    (Rule::DayText, r"<daytext>"),
    (Rule::RelativeTextWeek, r"<relativetextweek>"),
    (Rule::RelativeText, r"<relativetext>"),
    (Rule::Date, r"<monthfull>|<monthabbr>"),
    (Rule::Zone, r"<tzcorrection>|<tz>"),
    (
        Rule::DateShortWithTime12,
        r"<dateshortwithtimeshort12>|<dateshortwithtimelong12>",
    ),
    (
        Rule::DateShortWithTime24,
        r"<dateshortwithtimeshort>|<dateshortwithtimelong>|<dateshortwithtimelongtz>",
    ),
    (Rule::Relative, r"<relative>"),
    (Rule::Skip, r"[.,]"),
    (Rule::Skip, r"<space>"),
    (Rule::Skip, r"\x00|\n"),
];

/// Replace every `<name>` in `pattern` with its definition.
fn expand(pattern: &str) -> String {
    let mut out = String::with_capacity(pattern.len());
    let mut rest = pattern;
    while let Some(open) = rest.find('<') {
        out.push_str(&rest[..open]);
        let after = &rest[open + 1..];
        let close = after.find('>').unwrap_or(after.len());
        let name = &after[..close];
        match DEFINITIONS.iter().find(|(n, _)| *n == name) {
            Some((_, definition)) => {
                out.push_str("(?:");
                out.push_str(&expand(definition));
                out.push(')');
            }
            None => out.push_str(&rest[open..open + close + 2]),
        }
        rest = &after[(close + 1).min(after.len())..];
    }
    out.push_str(rest);
    out
}

/// Every rule in one lazy DFA, reporting all the matches at a position so
/// the longest can win.
static SCANNER: LazyLock<Option<DFA>> = LazyLock::new(|| {
    let patterns: Vec<String> = RULES.iter().map(|(_, p)| expand(p)).collect();
    DFA::builder()
        .configure(DFA::config().match_kind(MatchKind::All))
        .syntax(syntax::Config::new().unicode(false).utf8(false))
        .thompson(thompson::Config::new().utf8(false))
        .build_many(&patterns)
        .ok()
});

thread_local! {
    static CACHE: RefCell<Option<Cache>> = const { RefCell::new(None) };
}

/// The rule that matches the longest run of `buf` from `at`, ties going to
/// the earlier rule, and where the match ends. `None` when no rule matches
/// (timelib's `any` rule, an unexpected character); `Err` when the DFA gave
/// up.
fn longest_match(
    dfa: &DFA,
    cache: &mut Cache,
    buf: &[u8],
    at: usize,
) -> Result<Option<(Rule, usize)>, ()> {
    let input = Input::new(buf).range(at..).anchored(Anchored::Yes);
    let mut state = OverlappingState::start();
    let mut best: Option<(usize, usize)> = None;
    loop {
        dfa.try_search_overlapping_fwd(cache, &input, &mut state)
            .map_err(|_| ())?;
        let Some(m) = state.get_match() else { break };
        let (pattern, end) = (m.pattern().as_usize(), m.offset());
        if best.is_none_or(|(p, e)| end > e || (end == e && pattern < p)) {
            best = Some((pattern, end));
        }
    }
    Ok(best.map(|(pattern, end)| (RULES[pattern].0, end)))
}

/// What the scan has seen so far: timelib's `have_time`, `have_date` and
/// `have_zone`.
#[derive(Default)]
struct Seen {
    time: u8,
    date: bool,
    zone: u8,
}

/// The outcome of one rule's action: carry on, an error, or undecided.
enum Step {
    Continue,
    Error,
    Undecided,
}

impl Seen {
    /// `TIMELIB_HAVE_TIME()`: a second time is an error.
    fn time(&mut self) -> bool {
        if self.time != 0 {
            return false;
        }
        self.time = 1;
        true
    }

    /// `TIMELIB_HAVE_DATE()`: a second date is an error.
    fn date(&mut self) -> bool {
        if self.date {
            return false;
        }
        self.date = true;
        true
    }

    /// `TIMELIB_HAVE_TZ()`: a second zone is only a warning, but the rule
    /// stops there; a third is an error.
    fn zone(&mut self) -> Option<Step> {
        self.zone = self.zone.saturating_add(1);
        match self.zone {
            1 => None,
            2 => Some(Step::Continue),
            _ => Some(Step::Error),
        }
    }
}

/// Whether PHP's free-form parser accepts `datetime`: `Some(false)` when it
/// reports an error, `Some(true)` when it reports none, and `None` when that
/// depends on something this port does not know (the timezone database) or
/// the string is outside the cases it handles.
pub(super) fn accepts(datetime: &str) -> Option<bool> {
    let trimmed =
        datetime.trim_matches(|c: char| matches!(c, ' ' | '\t' | '\n' | '\r' | '\x0B' | '\x0C'));
    if trimmed.is_empty() || trimmed.len() > MAX_LEN || trimmed.contains('\0') {
        return None;
    }
    let dfa = SCANNER.as_ref()?;
    // timelib pads the string with NUL bytes, which a few rules read as
    // the end of a token.
    let mut buf = Vec::with_capacity(trimmed.len() + 1);
    buf.extend_from_slice(trimmed.as_bytes());
    buf.push(0);
    let len = trimmed.len();
    CACHE.with(|cell| {
        let mut slot = cell.borrow_mut();
        let cache = slot.get_or_insert_with(|| dfa.create_cache());
        let mut seen = Seen::default();
        // An undecided token leaves the scan's state as it would be either
        // way, so a later error still settles the answer.
        let mut undecided = false;
        let mut at = 0;
        while at < len {
            let Some((rule, end)) = longest_match(dfa, cache, &buf, at).ok()? else {
                return Some(false);
            };
            let token = &trimmed.as_bytes()[at..end.min(len)];
            match act(rule, token, &mut seen) {
                Step::Continue => {}
                Step::Error => return Some(false),
                Step::Undecided => undecided = true,
            }
            at = end;
        }
        (!undecided).then_some(true)
    })
}

/// Run the error-relevant part of `rule`'s action on `token`.
fn act(rule: Rule, token: &[u8], seen: &mut Seen) -> Step {
    let ok = |accepted: bool| {
        if accepted {
            Step::Continue
        } else {
            Step::Error
        }
    };
    match rule {
        Rule::ClearTime | Rule::DayText => {
            seen.time = 0;
            Step::Continue
        }
        Rule::Noon | Rule::BackFrontOf => {
            seen.time = 1;
            Step::Continue
        }
        Rule::Now | Rule::FirstLastDayOf | Rule::Year4 | Rule::Ago => Step::Continue,
        Rule::RelativeTextWeek | Rule::Relative | Rule::Skip => Step::Continue,
        Rule::Timestamp | Rule::TimestampMs => {
            seen.date = false;
            seen.time = 0;
            if let Some(step) = seen.zone() {
                return step;
            }
            let digits = token
                .iter()
                .take_while(|b| **b != b'.')
                .filter(|b| b.is_ascii_digit());
            // A number timelib's `strtoll()` may not hold.
            if digits.count() > 18 {
                return Step::Undecided;
            }
            // The fraction is read as a number, and an empty one is an error.
            ok(rule == Rule::Timestamp || !token.ends_with(b"."))
        }
        // The weekday these name clears the time.
        Rule::WeekdayOf => {
            seen.time = 0;
            Step::Continue
        }
        Rule::RelativeText => {
            let unit = token
                .rsplit(|b| matches!(b, b' ' | b'\t' | 0xA0 | 0xAF))
                .next()
                .unwrap_or_default();
            if is_day_word(unit) {
                seen.time = 0;
            }
            Step::Continue
        }
        Rule::Time => ok(seen.time()),
        Rule::GnuNoColon => {
            if seen.time >= 2 {
                return Step::Error;
            }
            seen.time += 1;
            Step::Continue
        }
        Rule::Date => ok(seen.date()),
        Rule::DateShortWithTime12 => ok(seen.date() && seen.time()),
        Rule::DateTime => {
            if !(seen.time() && seen.date()) {
                return Step::Error;
            }
            // Only the SOAP form has a fraction, and an offset after it.
            match token.iter().position(|b| *b == b'.') {
                Some(dot) => {
                    let rest = &token[dot + 1..];
                    let zone = &rest[rest.iter().take_while(|b| b.is_ascii_digit()).count()..];
                    if zone.is_empty() {
                        Step::Continue
                    } else {
                        zone_step(zone)
                    }
                }
                None => Step::Continue,
            }
        }
        Rule::Clf => {
            if !(seen.time() && seen.date()) {
                return Step::Error;
            }
            let zone = token
                .iter()
                .rposition(|b| matches!(b, b' ' | b'\t' | 0xA0 | 0xAF))
                .map_or(&token[..0], |space| &token[space + 1..]);
            zone_step(zone)
        }
        Rule::Zone => {
            if let Some(step) = seen.zone() {
                return step;
            }
            zone_step(token)
        }
        Rule::DateShortWithTime24 => {
            if !(seen.date() && seen.time()) {
                return Step::Error;
            }
            let rest = after_short_date_time(token);
            if rest.is_empty() {
                Step::Continue
            } else {
                zone_step(rest)
            }
        }
    }
}

fn zone_step(text: &[u8]) -> Step {
    match zone_found(text) {
        Some(true) => Step::Continue,
        Some(false) => Step::Error,
        None => Step::Undecided,
    }
}

/// The days and `weekday`, which `timelib_set_relative()` treats as a
/// weekday or special unit and so clears the time.
fn is_day_word(word: &[u8]) -> bool {
    const DAY_WORDS: [&str; 23] = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sundays",
        "mondays",
        "tuesdays",
        "wednesdays",
        "thursdays",
        "fridays",
        "saturdays",
        "sun",
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "weekday",
        "weekdays",
    ];
    DAY_WORDS
        .iter()
        .any(|day| word.eq_ignore_ascii_case(day.as_bytes()))
}

/// What the `dateshortwith…` action leaves after reading the month, day,
/// hour, minute and (after a `:`) second, which it hands to the timezone
/// parser when it is not empty.
fn after_short_date_time(token: &[u8]) -> &[u8] {
    let mut p = 0;
    // `timelib_get_month()`
    while token
        .get(p)
        .is_some_and(|b| matches!(b, b' ' | b'\t' | b'-' | b'.' | b'/'))
    {
        p += 1;
    }
    while token.get(p).is_some_and(u8::is_ascii_alphabetic) {
        p += 1;
    }
    // `timelib_get_nr()`: skip to a digit, read at most two.
    let number = |p: &mut usize| {
        while token.get(*p).is_some_and(|b| !b.is_ascii_digit()) {
            *p += 1;
        }
        let start = *p;
        while *p - start < 2 && token.get(*p).is_some_and(u8::is_ascii_digit) {
            *p += 1;
        }
    };
    number(&mut p);
    number(&mut p);
    number(&mut p);
    if token.get(p) == Some(&b':') {
        number(&mut p);
    }
    &token[p..]
}

/// `timelib_parse_zone()` over `text`: whether it names a zone. `None` when
/// the answer depends on the PHP build's timezone database.
fn zone_found(text: &[u8]) -> Option<bool> {
    let mut p = 0;
    while text
        .get(p)
        .is_some_and(|b| matches!(b, b' ' | b'\t' | b'('))
    {
        p += 1;
    }
    // `timelib_eat_spaces()` also skips the non-breaking spaces before it.
    loop {
        if text[p..].starts_with(b"\xC2\xA0") {
            p += 2;
        } else if text[p..].starts_with(b"\xE2\x80\xAF") {
            p += 3;
        } else {
            break;
        }
    }
    let mut rest = &text[p..];
    if rest.starts_with(b"GMT") && matches!(rest.get(3), Some(b'+' | b'-')) {
        rest = &rest[3..];
    }
    if let Some((b'+' | b'-', offset)) = rest.split_first() {
        return Some(offset_found(offset));
    }
    let word_len = rest
        .iter()
        .take_while(|b| b.is_ascii_alphanumeric() || matches!(b, b'/' | b'_' | b'-' | b'+'))
        .count();
    let word = &rest[..word_len];
    if word.len() < 6 && is_abbreviation(word) {
        return Some(true);
    }
    // Then the identifier lookup, which uses the build's database.
    if word.iter().any(|b| !b.is_ascii_alphabetic())
        || MAYBE_IDENTIFIERS
            .iter()
            .any(|id| word.eq_ignore_ascii_case(id.as_bytes()))
    {
        return None;
    }
    Some(false)
}

/// `timelib_parse_tz_cor()`: the digits and colons after the sign, which
/// must spell `H`, `HH`, `H:MM`, `HHMM`, `HH:MM`, `HHMMSS` or `HH:MM:SS`.
fn offset_found(offset: &[u8]) -> bool {
    let len = offset
        .iter()
        .take_while(|b| b.is_ascii_digit() || **b == b':')
        .count();
    let s = &offset[..len];
    match len {
        1..=4 | 6 => true,
        5 => s[2] == b':',
        8 => s[2] == b':' && s[5] == b':',
        _ => false,
    }
}

fn is_abbreviation(word: &[u8]) -> bool {
    word.eq_ignore_ascii_case(b"utc")
        || word.eq_ignore_ascii_case(b"gmt")
        || ABBREVIATIONS
            .iter()
            .any(|abbr| word.eq_ignore_ascii_case(abbr.as_bytes()))
}

/// The abbreviations compiled into timelib (`timezonemap.h`), as
/// `DateTimeZone::listAbbreviations()` lists them.
const ABBREVIATIONS: &[&str] = &[
    "acdt", "acst", "addt", "adt", "aedt", "aest", "ahdt", "ahst", "akdt", "akst", "amt", "apt",
    "ast", "awdt", "awst", "awt", "bdst", "bdt", "bmt", "bst", "cast", "cat", "cddt", "cdt",
    "cemt", "cest", "cet", "cmt", "cpt", "cst", "cwt", "chst", "dmt", "eat", "eddt", "edt", "eest",
    "eet", "emt", "ept", "est", "ewt", "ffmt", "fmt", "gdt", "gmt", "gst", "hdt", "hkst", "hkt",
    "hmt", "hpt", "hst", "hwt", "iddt", "idt", "imt", "ist", "jdt", "jmt", "jst", "kdt", "kmt",
    "kst", "lst", "mddt", "mdst", "mdt", "mest", "met", "mmt", "mpt", "msd", "msk", "mst", "mwt",
    "nddt", "ndt", "npt", "nst", "nwt", "nzdt", "nzmt", "nzst", "pddt", "pdt", "pkst", "pkt",
    "plmt", "pmt", "ppmt", "ppt", "pst", "pwt", "qmt", "rmt", "sast", "sdmt", "sjmt", "smt", "sst",
    "tbmt", "tmt", "uct", "utc", "wast", "wat", "wemt", "west", "wet", "wib", "wita", "wit", "wmt",
    "yddt", "ydt", "ypt", "yst", "ywt", "a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

/// The timezone identifiers of six letters or fewer with no separator, the
/// only ones a lone word can name. Whether a build knows them varies (the
/// backward-compatible links are often left out), so they stay undecided.
const MAYBE_IDENTIFIERS: &[&str] = &[
    "cet", "cuba", "eet", "egypt", "eire", "est", "gb", "gmt", "hst", "iran", "israel", "japan",
    "libya", "met", "mst", "navajo", "nz", "poland", "prc", "roc", "rok", "turkey", "uct", "utc",
    "wet", "zulu",
];

#[cfg(test)]
#[path = "date_grammar_tests.rs"]
mod tests;
