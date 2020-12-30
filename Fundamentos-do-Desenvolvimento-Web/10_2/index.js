//Exercise 1
/** Escreva um teste que verifique a chamada do callback de uma função uppercase,
 * que transforma as letras de uma palavra em letras maiúsculas.
 * Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. */
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

//**Código-base para os exercícios 2 e 3:**
/** O código a seguir simula uma chamada ao banco de dados para buscar usuários.
 * O resultado dessa busca é uma *Promise*, que é utilizada pelo método `getUserName`. */
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

//Exercise 4
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

//Exercício 6
/** Nesse exercício, você irá criar funções parecidas com código abaixo 
 *o mesmo que foi usado como exemplo sobre os testes de promise. */

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

/**  6.1. Adicione uma funcionalidade para buscar pelo nome do animal 
 * - crie uma função que deverá passar no teste abaixo.
Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar. */

const findAnimalByName = (name) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const animalObj = Animals.find(animal => animal.name === name);
    if (animalObj) {
      return resolve(animalObj);
    }
    return reject('Nenhum animal com esse nome!');
  }, 100);
})

/** 6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais.
 * O retorno deve ser um array de objetos, mas, caso não ache nenhum,
 * retorne uma mensagem de erro. Escreva tanto a função como o seu teste. */

const findAnimalByAge = (age) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const animalObj = Animals.find(animal => animal.age === age);
    if (animalObj) {
      return resolve(animalObj);
    }
    return reject('Nenhum animal com essa idade!');
  }, 100);
})


const getAnimal = (input) => typeof input === 'number' ? findAnimalByAge(input) : findAnimalByName(input);

module.exports = { uppercase, getUserName, getRepos, getAnimal };