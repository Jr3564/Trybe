const fileSystem = require('fs');

fileSystem.writeFile('./meu-arquivo.txt', 'Meu textão', (err) => {
  if (err) {
    throw err;
  }
  console.log('Arquivo salvo');
});