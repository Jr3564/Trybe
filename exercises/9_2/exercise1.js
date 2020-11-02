
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => data);

const loadJoke = async () => document.querySelector('#jokeContainer').innerText = await fetchJoke()
.then(result => result.joke);

window.onload = () => loadJoke();
  