const { questionFloat } =  require('readline-sync') ; 
const { imcMessage } = require('./IMC');

const weight = questionFloat("Qual é seu peso?");
const height = questionFloat("Qual é sua altura?");

const message = imcMessage(weight, height);

console.log(message);
