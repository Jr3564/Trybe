const { calculator } = require('../services');

const randomNumber = () => Math.floor(Math.random() * 100);

async function exercise2 () {
  try {
    const result = await calculator(randomNumber(), randomNumber(), randomNumber());
    console.log(`\nO resultado é: ${result}\n`)
  } catch (error) {
    console.log(`\n Não é possível efetuar esse calculo: ${error}\n`);
  }
};

module.exports = exercise2;
