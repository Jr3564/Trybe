const fetchPromise = require('./exercise2');
const resultArr = (input) => [2, 3, 5, 10].map(num => Math.floor(input / num));
const sumArr = input => input.reduce((acc, crr) => acc + crr, 0);
fetchPromise().then(result => resultArr(result))
.then(result => console.log(sumArr(result)))
.catch(() => console.log( "É mais de oito mil! Essa promise deve estar quebrada!"));
