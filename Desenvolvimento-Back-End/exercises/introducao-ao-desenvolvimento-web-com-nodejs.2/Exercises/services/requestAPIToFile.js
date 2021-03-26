const requestAPITo = require('./requestAPITo');
const write = require('./writeFile');

async function requestAPIToFile(url, fileName) {
  try{
    const result = await requestAPITo(url);
    write(result, fileName);
    console.log('- Arquivo atualizado com sucesso.');
  } catch (error) {
    throw new Error(`Não é possível escrever no arquivo ${fileName}.\n ${error}`);
  }
}

module.exports = requestAPIToFile;
