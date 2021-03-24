function factorialNumberTo (number) {

  let factorial = +number;
  
  let index = +number - 1;

  for (index; index > 0; index--) {
    factorial *= index;
  }

  return factorial;

}

const validNumber = (number) => {
  if (!!number && Number.isInteger(number)) return true;
  const message = `O número ${number} não é válido.\n`;
  console.log(message);
  return false;
};

module.exports= { factorialNumberTo, validNumber };
