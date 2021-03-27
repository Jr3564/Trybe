const fs = require('fs');

const readFile = (fileName) => {
  try {
    if (!fs.existsSync(fileName)) throw new Error('Arquivo não encontrado.');
    fs.readFileSync(fileName, 'utf8');
  } catch (error) {
    throw new Error(`Não foi possível ler o arquivo. \n${error}\n`);
  }
};

module.exports = readFile;
