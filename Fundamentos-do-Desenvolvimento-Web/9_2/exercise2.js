const fetchPromise = () => {
  const randomNumbers = Array.from({length: 10}, () => Math.floor(Math.random() * 50));
  const sumNum = randomNumbers.reduce((sum, num) => sum + (num * num),0);
  return new Promise((resolve, reject) => sumNum < 8000 ? resolve(sumNum) : reject(sumNum));
}
module.exports = fetchPromise;

//fetchPromise().then(() => console.log('Deu bom')).catch(() => console.log('Deu ruim'));
