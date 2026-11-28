<?php

namespace Bug13144;

use ArrayObject;

use function PHPStan\Testing\assertType;

$arr = new ArrayObject(['a' => 1, 'b' => 2]);

assertType('ArrayObject<string, int>', $arr);

$a = $arr['a'];
$b = $arr['b'];

assertType('int', $a); // PHPStan says `int|null` from `offsetGet()`, but an offset read takes the value type, as it does on the array `ArrayObject` wraps
assertType('int', $b); // PHPStan says `int|null` from `offsetGet()`, but an offset read takes the value type, as it does on the array `ArrayObject` wraps


['a' => $a, 'b' => $b] = $arr;

assertType('int', $a); // PHPStan says `int|null` from `offsetGet()`, but an offset read takes the value type, as it does on the array `ArrayObject` wraps
assertType('int', $b); // PHPStan says `int|null` from `offsetGet()`, but an offset read takes the value type, as it does on the array `ArrayObject` wraps
