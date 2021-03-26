const fs = require('fs');

async function read (fileName, callback) {
  return await fs.readFile(fileName, 'utf8', (err, file) => {
    if (err) {
      throw new Error(`Não foi possível ler o arquivo ${fileName}\n ${err}`);
    } else if (!file) {
      throw new Error(`O arquivo ${fileName} está vazio. O retorno foi undefined.\n`);
    }
    console.log('- Arquivo lido com sucesso.');
    callback(file);
  });
};

module.exports = read;