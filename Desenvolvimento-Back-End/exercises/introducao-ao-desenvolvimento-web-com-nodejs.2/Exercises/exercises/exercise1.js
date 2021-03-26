const { prompt } =  require('inquirer');
const { calculator } = require('../services');

const questions = [
  {
    type: 'input',
    name: 'number1',
    message: "Digite o primeiro número aqui: ",
  },
  {
    type: 'input',
    name: 'number2',
    message: "Digite o segundo número aqui: ",
  },
  {
    type: 'input',
    name: 'number3',
    message: "Digite o terceiro número aqui: ",
  },
]

const exercise1 = () => prompt(questions).then((numbers) => {
  const { number1, number2, number3 } = numbers;
  calculator(+number1, +number2, +number3)
    .then(result => { console.log(`\nO resultado é: ${result}\n`) })
    .catch(error => { console.log(`\n Não é possível efetuar esse calculo: ${error}\n`) });
});

module.exports = exercise1;