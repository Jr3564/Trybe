const fetchPromise = require('./exercise2');
const resultArr = (input) => [2, 3, 5, 10].map(num => Math.floor(input / num));

fetchPromise().then(result => console.log(resultArr(result)))
.catch(result => console.log(result));