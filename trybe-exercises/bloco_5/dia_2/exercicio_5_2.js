
/* O objetivo desses exercícios é colocar em prática o
 que você acabou de aprender sobre DOM. Por isso, 
 você deve fazer os exercícios utilizando apenas código 
 JavaScript, o qual deve ser inserido entre as tags 
 <script> e </script>.
Para uma melhor organização, faça commits a cada
tarefa concluída. Vamos aos exercícios:*/

/*Adicione a tag h1 com o texto Exercício 5.2 - 
JavaScript DOM como filho da tag body;*/
let title = document.createElement("h1") ;
title.innerText = "Exercício 5.2 - JavaScript DOM" ;
document.body.appendChild(title);

/*Adicione a tag div com a classe main-content como 
filho da tag body;*/
let dive0 = document.createElement("div") ;
dive0.className = "main-content" ;
document.body.appendChild(dive0) ;

/*Adicione a tag div com a classe center-content como
 filho da tag div criada no passo 2;*/
 let diveJunior = document.createElement("div") ;
 diveJunior.className = "center-content" ;
 document.body.querySelector(".main-content").appendChild(diveJunior) ;

/*Adicione a tag p como filho do div criado no passo 3 
e coloque algum texto; */
let psomeText = document.createElement("p") ;
psomeText.innerText = "Uma pulga possui uma aceleração em direção ao espaço muito maior do que qualquer ônibus espacial já inventado." ;
document.querySelector(".center-content").appendChild(psomeText) ;

/*Adicione a tag div com a classe left-content como 
filho da tag div criada no passo 2;*/
let nextDive = document.createElement("div") ;
nextDive.className = "left-content" ;
document.querySelector(".main-content").appendChild(nextDive) ;

/*Adicione a tag div com a classe right-content como
 filho da tag div criada no passo 2;*/
let semTv = document.createElement("div") ;
semTv.className = "right-content" ;
document.querySelector(".main-content").appendChild(semTv);

/*Adicione uma imagem com src configurado para o valor
 https://picsum.photos/200 e classe small-image. 
 Esse elemento deve ser filho do div criado no passo 5;*/
let img1 = document.createElement("img");
img1.src = "https://picsum.photos/200" ;
img1.className = "small-image" ;
document.querySelector(".left-content").appendChild(img1);

/*Adicione uma lista não ordenada com os valores de 
1 a 10 por extenso como valores da lista. Essa lista
 deve ser filha do div criado no passo 6;*/
let list1 = document.createElement("ul");
for( let i = 0 ; i < 10 ; i++ ){
  let a = document.createElement("li");
  a.innerText = (i + 1) ;
  list1.appendChild(a);
} ;
document.querySelector(".right-content").appendChild(list1);

/*Adicione 3 tags h3, todas sendo filhas do div criado 
no passo 2.*/
for( let i = 0 ; i < 3 ; i++ ){
  let h33 = document.createElement("h3") ;
  document.querySelector(".main-content").appendChild(h33);
}


/*Agora que você criou muita coisa, vamos fazer algumas 
alterações e remoções:*/
/*Adicione a classe title na tag h1 criada;*/
document.querySelector("h1").className = "title";

/*Adicione a classe description nas 3 tags h3 criadas;*/
for( let i = 0 ; i < 3 ; i++ ){
document.querySelectorAll("h3")[i].className = "description" ;
} ;

/*Remova o div criado no passo 5 (aquele que possui a
classe left-content). Utilize a função .
removeChild();*/
document.querySelector(".left-content").remove() ;

/*Centralize o div criado no passo 6 (aquele que possui 
a classe right-content). Dica: para centralizar, 
basta configurar o margin-right: auto do div;*/
document.querySelector(".main-content .right-content").marginRight = "auto" ;

/*Troque a cor de fundo do elemento pai da div 
criada no passo 3 (aquela que possui a classe 
center-content) para a cor verde;*/
document.querySelector(".main-content .center-content").backgroundColor = "green";

/*Remova os dois últimos elementos (nove e dez) 
da lista criada no passo 8. */
for( let i in list1){
  if(list1[i].innerText.includes(9)){
    list1[i].removeChild();
  } ;
};
