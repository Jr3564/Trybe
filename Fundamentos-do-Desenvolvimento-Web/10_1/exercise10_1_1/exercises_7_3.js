//Exercício 1
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

//Exercício 2
const myRemove = (arr, itemInput) => arr.reduce((newArr, item) => {
  itemInput !== item ? newArr.push(item) : newArr;
  return newArr;
}, []);

//Exercício 3
const myRemoveWithoutCopy = (arr, item) => {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}

//Exercício 4
const myFizzBuzz = num => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//Exercício 5
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

module.exports = { myRemove, sum, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 }