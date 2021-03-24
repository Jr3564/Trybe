const { prompt } =  require('inquirer');
const { factorialNumberTo, validNumber } = require('./factorialNumbers');

const questions = [
  {
    type: 'input',
    name: 'number',
    message: "Digite o número... \n",
    validate: (number) => validNumber(+number),
  }
]

prompt(questions)
  .then(({ number }) => {
    const numberFactorial = factorialNumberTo(number);
    const message = `O factorial de ${number} é ${numberFactorial}.`;
    console.log(message);
  });
