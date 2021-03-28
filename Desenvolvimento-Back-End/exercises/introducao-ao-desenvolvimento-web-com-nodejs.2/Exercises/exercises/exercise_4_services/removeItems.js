const { read, write } = require('../../services');
const { prompt } =  require('inquirer');

const removeSpacesCommas = (string) => string.replaceAll(" ", '').split(',');

const validate = (ids) => {
  const isNumber = removeSpacesCommas(ids)?.every(id => Number.isInteger(+id));

  if (!isNumber) {
    console.log(`\nSó são aceito números inteiros separados por vírgula.\n`);
  }

  return !!isNumber;
};

const question = [
  {
    type: 'input',
    name: 'ids',
    message: "Digite o Ids separado por virgula.    \n",
    validate: (ids) => validate(ids),
  },
]

async function removeItems (fileName) {
  console.log(`- Procurando Id...\n`);
  try {
    read(fileName, (file) => {
      prompt(question)
        .then(({ ids }) => {
          const idArray = removeSpacesCommas(ids);
          const fileArray = JSON.parse(file);

          const newFile = fileArray.filter(({ id }) => !idArray.includes(id));
          write(newFile, fileName);

          const notInArray = idArray.filter(id => !fileArray.some(({ id: idFile }) => idFile === id));

          if (notInArray.length) {
            const msg = `- ${notInArray > 0 ? "Os ids" : "O id"} ${notInArray} não existem nesse arquivo.\n`
            console.log(msg);
          };
          
          const itemsRemovidos = fileArray.length - newFile.length;
          console.log(`- ${itemsRemovidos} ${itemsRemovidos <= 1 ? "Item removido" : "Itens removidos"} com sucesso.\n`);
        });
    });
  } catch(error) {
    console.log(error);
  }
};

module.exports = removeItems;