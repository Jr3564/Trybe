const { prompt } =  require('inquirer');
const { isFibonacciMessage, validNumber, fibonacciListToString } = require('./fibonacciSequence');

const choices = {
  first: 'Saber se seu número faz parte da sequência.',
  second: 'Quero a sequencia até meu número.'
}

const questions = [
  {
    type: 'input',
    name: 'number',
    message: "Digite um número aqui: ",
    validate: (number) => validNumber(+number),
  },
  {
    type: 'list',
    name: 'choice',
    message: 'O que você deseja fazer?',
    choices: [choices.first, choices.second],
    filter: (choice) => choice,
  },
]

prompt(questions)
  .then(({ choice, number }) => {
    let message;

    switch (choice) {
      
      case choices.first:
        message = isFibonacciMessage(number);
        break;

      case choices.second:
        message = fibonacciListToString(number);
        break;
    }

    console.log(message);
  });
