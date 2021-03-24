const { prompt } =  require('inquirer');
const { imcMessage } = require('./IMC');

const questions = [
  {
    type: 'input',
    name: 'weight',
    message: "Qual é seu peso",
  },
  {
    type: 'input',
    name: 'height',
    message: "Qual é sua altura?",
  }
]

prompt(questions)
  .then(({ weight, height }) => {
    const message = imcMessage(weight, height);
    console.log(message);
  });
