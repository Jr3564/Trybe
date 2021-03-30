const express = require('express');

const app = express();

const fs = require('fs');

const rescue = require('express-rescue');

const route = {
  simpsons: '/simpsons',
  simpsonsId: '/simpsons/:id',
};

const simpsonsPath = './data/simpsons.json';

app.get(route.simpsons, rescue(async (req, res) => {
  res.send('<h1>Hello World</h1>');

  // const allSimpsons = await fs.readFile(simpsonsPath);
  // res.status(200).send(allSimpsons.toString('utf-8'));
}));

app.use((err, _req, res, _next) => {
  res.status(500).send(err);
});
