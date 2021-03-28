
const calculationOfParameters = (parametersArray) => {
  const [p1, p2, p3] = parametersArray;
  return (p1 + p2) * p3;
}

const isAllNumber = (parametersArray) => parametersArray
  .every((number) => typeof(number) === "number" && !Number.isNaN(number));

const errors = {
  typeError: "Digite apenas números",
  lowValueError: "Valor muito baixo",
};

const calculator = (...parameters) => new Promise((resolve, reject) => {
  if(!isAllNumber(parameters))  {
    reject(errors.typeError);
  }
  else if (calculationOfParameters(parameters) < 50) {
    reject(errors.lowValueError);
  }
    return resolve(calculationOfParameters(parameters));
});

module.exports = calculator;
