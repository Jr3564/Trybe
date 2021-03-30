const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const route = {
  home: '/',
  ping: '/ping',
  hello: '/hello',
  users: '/users/:name/:age',
};

app.get(route.home, (_req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get(route.ping, (_req, res) => {
  res.send({ message: 'Pong!' });
});

const message = {
  hello: (name) => ({ message: `Hello, ${name}!` }),
  unauthorized: { message: 'Unauthorized' },
  howOldAreYou: (name, age) => ({ message: `Seu nome é ${name} e você tem ${age} anos de idade` }),
};

app.post(route.hello, (req, res) => {
  const { name, age } = req.body;

  if (+age > 17) {
    res.status(200).send(message.hello(name));
  }

  res.status(401).send(message.unauthorized);
});

app.put(route.users, (req, res) => {
  const { name, age } = req.params;
  res.send(message.howOldAreYou(name, age));
});

app.listen(3000);
