const { read } = require('../../services');
const { prompt } =  require('inquirer');

const validNumber = (id) => {
  if (!!id && Number.isInteger(id)) return true;
  const message = `O número ${id} não é válido.\n`;
  console.log(message);
  return false;
};

const question = [
  {
    type: 'input',
    name: 'id',
    message: "Digite o Id:",
    validate: (id) => validNumber(+id),
  },
]

async function getNameTo (fileName) {
  console.log(`- Procurando Id...\n`);
  try {
    read(fileName, (file) => {
      prompt(question)
      .then(({ id: simpsonId }) => {
        const fileArr = JSON.parse(file);
        const { name } = fileArr.find(({ id }) => simpsonId === id) || { name: '' };
        if (!name) console.log(`\nO id ${simpsonId} não está na lista.\n`);
        console.log(`\n${name}\n`);
      });
    });
  } catch(error) {
    console.log(error);
  }
};

module.exports = getNameTo;