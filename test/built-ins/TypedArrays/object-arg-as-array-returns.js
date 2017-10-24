// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-object
description: >
  Return typedArray from array argument
info: |
  22.2.4.4 TypedArray ( object )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
  internal slot.

includes: [testTypedArray.js]
features: [TypedArray]
---*/

var obj = [7, 42];

testWithTypedArrayConstructors(function(TA, N) {
  var typedArray = new TA(N(obj));
  assert.sameValue(typedArray.length, 2);
  assert.sameValue(typedArray[0], N(7));
  assert.sameValue(typedArray[1], N(42));
  assert.sameValue(typedArray.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
});
