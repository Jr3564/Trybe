const { calculator } = require('../services');

const randomNumber = () => Math.floor(Math.random() * 100);

function exercise2 () {
  calculator(randomNumber(), randomNumber(), randomNumber())
    .then(result => { console.log(`\nO resultado é: ${result}\n`) })
    .catch(error => { console.log(`\n Não é possível efetuar esse calculo: ${error}\n`) });
};

module.exports = exercise2;
