const { prompt } =  require('inquirer');
const { exercise1, exercise2, exercise3, exercise4 } = require('./exercises');

const choices = {
  exercise1: 'Exercício 1. Calcule (a + b) * c',
  exercise2: 'Exercício 2. Utilizando a mesma formula anterior, trará um número randomico.',
  exercise3: 'Exercício 3. Igualzinho o 2, porém com await/async.',
  exercise4: 'Exercício 4. Trabalhe com um arquivo de texto sobre os Simpsons',
}

const questions = [
  {
    type: 'list',
    name: 'choice',
    message: "Olá, escolha um exercício...",
    choices: [...Object.values(choices)],
    filter: (choice) => choice,
  },
]

prompt(questions)
  .then(({ choice }) => {
    switch (choice) {
      
      case choices.exercise1:
        exercise1();
        break;

      case choices.exercise2:
        exercise2();
        break;

      case choices.exercise3:
        exercise3();
        break;
      
      case choices.exercise4:
        exercise4();
        break;
    }
  });
  