
const mapArr = input => [2, 3, 5, 10].map(num => Math.floor(input / num));

const fetchPromise = (callback) => {
  const randomNumbers = Array.from({length: 10}, () => Math.floor(Math.random() * 50));
  const sumNum = randomNumbers.reduce((sum, num) => sum + (num * num),0);
  return sumNum < 8000 ? callback(sumNum) : new Error();
}

const returnResult = async () => {
  try{
    await console.log(fetchPromise(mapArr).reduce((acc, crr) => acc + crr, 0));
  }catch(error){
    console.log( "É mais de oito mil! Essa promise deve estar quebrada!")
  }
};
returnResult();