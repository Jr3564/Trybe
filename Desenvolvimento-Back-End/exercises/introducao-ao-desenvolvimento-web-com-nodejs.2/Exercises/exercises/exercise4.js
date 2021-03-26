const { prompt } =  require('inquirer');
const { requestAPIToFile } = require('../services');
const { printAllTo, getNameTo } = require('./exercise_4_services');

const choices = {
  option_1: 'Imprimir todos os dados do arquivo ./simpsons.json com Id',
  option_2: 'Encontrar um Id',
  option_3: 'Remover items',
  option_4: 'Criar um novo arquivo apartir do arquivo ./simpsons.json pelos Id',
  option_5: 'Adicionar um item à um arquivo',
  option_6: 'Substituir nome',
}

const questions = [
  {
    type: 'list',
    name: 'choice',
    message: "O que você deseja fazer?",
    choices: [...Object.values(choices)],
    filter: (choice) => choice,
  },
];

const url = 'https://course.betrybe.com//back-end/nodejs/simpsons.json';
const fileName = './simpsons.json';

async function exercise4 () {
  await requestAPIToFile(url, fileName);

  prompt(questions)
  .then(({ choice }) => {
    switch (choice) {
      
      case choices.option_1:
        printAllTo(fileName);
        break;

      case choices.option_2:
        getNameTo(fileName);
        break;

      case choices.option_3:
        console.log('Em construção');
        break;
      
      case choices.option_4:
        console.log('Em construção');
        break;

      case choices.option_3:
        console.log('Em construção');
        break;
        
      case choices.option_4:
        console.log('Em construção');
        break;
    }
  });
}

module.exports = exercise4;