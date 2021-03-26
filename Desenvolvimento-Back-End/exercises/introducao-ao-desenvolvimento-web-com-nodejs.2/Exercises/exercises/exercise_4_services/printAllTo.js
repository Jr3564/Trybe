const { read } = require('../../services');

async function printAllTo (fileName) {
  try {
    read(fileName, (file) => {
      const fileArr = JSON.parse(file);
      console.log('- Imprimindo lista de nomes...\n');
      fileArr.forEach(({ id, name }) => {
        const message = `${id} - ${name} `;
        console.log(message);
      });
    });
  } catch(error) {
    console.log(error);
  }
};

module.exports = printAllTo;