// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.3.16
esid: sec-%typedarray%.prototype.keys
description: >
  The prototype of the returned iterator is ArrayIteratorPrototype
info: |
  22.2.3.16 %TypedArray%.prototype.keys ( )

  ...
  3. Return CreateArrayIterator(O, "key").
includes: [testTypedArray.js]
features: [Symbol.iterator, TypedArray]
---*/

var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());

testWithTypedArrayConstructors(function(TA, N) {
  var sample = new TA(N([0, 42, 64]));
  var iter = sample.keys();

  assert.sameValue(Object.getPrototypeOf(iter), ArrayIteratorProto);
});
