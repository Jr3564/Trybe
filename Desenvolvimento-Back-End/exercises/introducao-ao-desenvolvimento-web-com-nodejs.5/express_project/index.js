/**
 * Atividade 5:
Rota: /:operacao/:numero1/:numero2
Objetivo: Deve validar a operação e retornar o resultado da mesma.
As operações podem ser soma , subtração , divisão ou multiplicação .
Regra: Um middleware deve ser usado para cada operação.
A operação deve ser recebida como parâmetro na rota.
 */

const express = require('express');

const app = express();

const route = {
  soma: '/soma/:numero1/:numero2',
  subtracao: '/subtracao/:numero1/:numero2',
  divisao: '/divisao/:numero1/:numero2',
  multiplicacao: '/multiplicacao/:numero1/:numero2',
};

const middleware = (req, _res, next) => {
  const { operacao } = req.params;
  next(route[operacao]);
};

app.use(middleware);

app.get(route.soma, (req, res) => {
  const { numero1, numero2 } = req.params;
  const cauculo = parseInt(numero1, 10) + parseInt(numero2, 10);
  res.status(200).send(`${cauculo}`);
});

app.get(route.subtracao, (req, res) => {
  const { numero1, numero2 } = req.params;
  const cauculo = parseInt(numero1, 10) - parseInt(numero2, 10);
  res.status(200).send(`${cauculo}`);
});

app.get(route.divisao, (req, res) => {
  const { numero1, numero2 } = req.params;
  const cauculo = parseInt(numero1, 10) / parseInt(numero2, 10);
  res.status(200).send(`${cauculo}`);
});

app.get(route.multiplicacao, (req, res) => {
  const { numero1, numero2 } = req.params;
  const cauculo = parseInt(numero1, 10) * parseInt(numero2, 10);
  res.status(200).send(`${cauculo}`);
});

app.listen(3000);
