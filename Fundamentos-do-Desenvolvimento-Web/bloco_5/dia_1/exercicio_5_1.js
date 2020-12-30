/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName()
*/

/* Crie uma função que mude o texto na tag <p> pa'ra uma descrição de como você 
se vê daqui a 2 anos.(Não gaste tempo pensando no texto e sim realizando o exercício) */
function getP()
{

 document.getElementsByTagName("p")[1].innerText = "Em outro país programando e morrendo de frio em quanto tomo meu chocolate quente.";

};
getP();
/* Crie uma função que mude a cor do quadrado 
amarelo para o verde da Trybe (rgb(76,164,109)).*/
function colorQ1()
{

  document.querySelector("head style").style.backgroundColor = "rgb(76,164,109)" ;

};
colorQ1()


/* Crie uma função que mude a cor do quadrado vermelho para branco. */

function colorQ2()
{

  document.querySelector(".main-content .center-content").style.backgroundColor = "rgb(255,255,255)" ;

};
colorQ2()
/* Crie uma função que corrija o texto da tag <h1>. */
function h1Correct()
{

  document.querySelector(".title").innerText = "Exercício 5.1 Javascript" ;

};
h1Correct();
/* Crie uma função que modifique todo o texto da tag <p> para maiúsculo. */
function upText()
{

  let arr = document.getElementsByTagName("p");
  for( let i in arr)
  {
    
    arr[i].innerText = arr[i].innerText.toUpperCase();

  } ;
  document.getElementsByTagName("p").innerText = arr;

};
upText();
/* Crie uma função que exiba o conteúdo de todas as tags <p> no console. */
function allP()
{
  for( let i in document.getElementsByTagName("p"))
  {
  console.log(document.getElementsByTagName("p")[i].innerText);
  } ;
};
