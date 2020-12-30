const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('../exercises_7_3');

describe('Tests exercise 1 block 7 day 3', () => {
  test('if sum is a function', () => {
    expect(sum).toBeDefined();
  }),
  it('the sum 4 and 5 is 9', () => {
    expect(9).toBe(sum(4,5));
  }),
  test('the sum 0 and 0 is 0', () => {
    expect(0).toBe(sum(0,0));
  }),
  test('throws on sum', () => {
    expect(() => { sum('xablau'); }).toThrow();
  })
});

describe('Tests exercise 2 block 7 day 3', () => {
  test('if function myRemove([1, 2, 3, 4], 3)) return [ 1, 2, 4 ]', () => {
    expect([ 1, 2, 4 ]).toEqual(myRemove([1, 2, 3, 4], 3));
  }),
  test('if function myRemove([1, 2, 3, 4], 3)) not return [ 1, 2, 3, 4 ]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  }),
  test('if function myRemove([1, 2, 3, 4]) not return [ 1, 2, 3, 4 ]', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4]));
  }),
  test('if function myRemove([1, 2, 3, 4], 5) not return [ 1, 2, 3, 4 ]', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  })
});

describe('Tests exercise 3 block 7 day 3', () => {
  test('if function myRemoveWithoutCopy([1, 2, 3, 4], 3)) return [ 1, 2, 4 ]', () => {
    expect([ 1, 2, 4 ]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  }),
  test('if function myRemoveWithoutCopy([1, 2, 3, 4], 3)) not return [ 1, 2, 3, 4 ]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  }),
  test('if function myRemoveWithoutCopy([1, 2, 3, 4]) not return [ 1, 2, 3, 4 ]', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4]));
  }),
  test('if function myRemoveWithoutCopy([1, 2, 3, 4], 5) not return [ 1, 2, 3, 4 ]', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  })
});

describe('Tests exercise 4 block 7 day 3', () => {
  it('the myFizzBuzz(15) return fizzbuzz', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  }),
  it('the myFizzBuzz(3) return fizz', () => {
    expect('fizz').toBe(myFizzBuzz(3));
  }),  it('the myFizzBuzz(5) return buzz', () => {
    expect('buzz').toBe(myFizzBuzz(5));
  }),  it('the myFizzBuzz(2) return 2', () => {
    expect(2).toBe(myFizzBuzz(2));
  }),
  test('throws on sum', () => {
    expect(() => { sum('xablau'); }).toThrow();
  })
});

describe('Tests exercise 5 block 7 day 3', () => {
  it('obj1 is equal and obj2', () => {
    expect(obj1).toEqual(obj2);
  }),  
  test('obj1 is not equal and obj3', () => {
    expect(obj1).not.toEqual(obj3);
  })
});
