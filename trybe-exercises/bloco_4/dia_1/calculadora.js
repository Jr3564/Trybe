/*
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para:
*/
/* Módulo */
function modulo( a , b )
{

    resultado = a % b ;

} ;

/* Multiplicação */
function multiplicacao( a , b )
{

    resultado = a * b ;

} ;

/* Divisão */
function divisao( a , b )
{

    resultado = a / b ;

} ;

/* Subtracão */
function subtracao( a , b )
{

    resultado = a - b ;

} ;

/* Adição */
function soma( a , b )
{

    resultado = a + b ;

} ;

/* 
    Faça um programa que retorne o maior de dois números. 
    Defina no começo do programa duas variáveis com os valores que serão comparados.
 */
function maiorNumero( a , b )
{   
  return ( a > b ? a : b ) ;

} ; 

/* Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados. */

function maiorDeTres( a , b , c )
{

    if ( a > b )
    {
        
        return a > c ? a : c ;

    }

    else
    {

        return b > c ? b : c  ;

    } ;

} ;

/* Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
 */

function positivoNegativo( a ) 
{

    if ( a >= 0 )
    {

       return a != 0 ? "positive" : "zero" ;

    }

    else 
    {

        return "negative" ;

    } ;

} ;

/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
 */

function trianguloVerificacao( aAngulo , bAngulo , cAngulo )
{

   return (aAngulo + bAngulo + cAngulo === 180) ? "true" : "false" ;

}

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 */

/*
nomePeca.toLowerCase() == xadrezPeca[i].nomePeca? console.log(xadrezPeca[i].movimentoPeca) : console.log("nome inválido") ; 
console.log(i)*/
 function xadrezPecas( nomePeca )
 {

    const xadrezPeca = 
    [ 
        {
            nomePeca : "rei" , 
            movimentoPeca : "Move-se 1 casa por jogada" 
        } ,
       
        {

            nomePeca : "rainha" , 
            movimentoPeca : "Move-se em todas as direções" 
    
        } ,

        {

            nomePeca : "bispo" , 
            movimentoPeca : "Move-se em diagonal" 
    
        } ,

        {

            nomePeca : "cavalo" , 
            movimentoPeca : "Move-se em 2 mais uma curva formando um L" 
    
        } ,

        {

            nomePeca : "torre" , 
            movimentoPeca : "Move-se para frente e pra os lados." 
    
        } ,

        {

            nomePeca : "peão" , 
            movimentoPeca : "Move-se apenas 1 casa para frente" 
    
        } ,

    ] ;

    for(let i = 0 ; i < 5 ; i++ )
    {
        if( nomePeca.toLowerCase() == xadrezPeca[i].nomePeca )
        {

            return xadrezPeca[i].movimentoPeca;

        }
        else if ( i == 4 && nomePeca.toLowerCase() != xadrezPeca[i].nomePeca )
        {

            console.log("nome inválido")

        }

    } ;

 } ;

console.log(xadrezPecas("BISpo"));
