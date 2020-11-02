const fetchPromise = require('./exercise2');
const resultArr = (input) => [2, 3, 5, 10].map(num => Math.floor(input / num));
fetchPromise().then(result => console.log(resultArr(result)))
.catch(() => console.log( "É mais de oito mil! Essa promise deve estar quebrada!"));