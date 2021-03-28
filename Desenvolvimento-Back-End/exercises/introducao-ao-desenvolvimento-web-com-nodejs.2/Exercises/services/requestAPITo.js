
const fetch = require('node-fetch');
const getRequest = (url) => fetch(url).then((element) => element.json());

async function requestAPITo(url) {
  try {
    const promisse = await getRequest(url);
    return promisse;
  } catch (error) {
    throw new Error(`Houve um erro ao fazer a requisição: ${error}`);
  }
}

module.exports = requestAPITo;
