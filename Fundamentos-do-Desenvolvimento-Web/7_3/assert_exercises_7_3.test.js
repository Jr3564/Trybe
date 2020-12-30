const assert = require('assert');

const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('../exercises_7_3');

//Exercício 1
assert.strictEqual(typeof sum, 'function');
assert.strictEqual(sum(4,5), 9);
assert.strictEqual(sum(0,0), 0);
assert.throws( () => {sum(4, "5")});

//Exercício 2
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4]), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//Exercício 3
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4]), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//Exercício 4
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(3), 'fizz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.strictEqual(myFizzBuzz(2), 2);
assert.strictEqual(myFizzBuzz('xablau'), false);

//Exercício 5
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);