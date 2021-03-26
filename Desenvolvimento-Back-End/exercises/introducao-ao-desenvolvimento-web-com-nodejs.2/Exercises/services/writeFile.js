const fs = require('fs');


async function write (text, fileName) {
  return await fs.writeFile(fileName, JSON.stringify(text), { flag: 'w' }, (err) => {
    if (err) {
      throw new Error(`Não fo possível inserir texto no arquivo ${fileName}.\n ${err}`);
    }
  });
}

module.exports = write;
