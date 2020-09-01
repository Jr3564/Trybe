/*Parte I - Objetos e For/In

Usando o objeto abaixo, faça os exercícios a seguir:*/

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

/* Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Valor esperado no console: Bem-vinda, Margarida */

function boasVindas(name)
{

    console.log( "Bem-vinda, " + name ) ;

} ;

/* Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
Valor esperado no console:

  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
 */
function addUserRec()
{

info.recorrente = 'sim' ;
console.log( info ) ;

} ;

/* Faça um for/in que mostre todas as chaves do objeto.
Valor esperado no console:

  personagem
  origem
  nota
  recorrente
  */
function chavesChaves()
{

    for(let index in info)
    {

        console.log(index) ;

    } ;

} ;

/* Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
Valor esperado no console:

  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim */
function valoresValores()
{

    for( let index in info)
    {

        console.log( info[index] ) ;

    };

} ;

/* 
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
 "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha! */
function outrosValores()
{
    
        info.personagem = "Tio Patinhas" ;
        info.origem = "Christmas on Bear Mountain, Dell's Four Color Comics #178" ;
        info.nota = "O último MacPatinhas" ;

        console.log(info) ;
};

/* Parte II - Funções

Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas
deixam o código mais bem escrito.*/

/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false */
function palindromo( nome ) 
{

    let inverso = [] ;

    for( let i = nome.length ; i >= 0 ; i-- )
    {

        inverso.push( nome[i] ) ; 

    } ;

    inverso = inverso.join( '' ) ;

    return inverso == nome ? true : false ;

} ;

/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */
function indiceMaiorValor( array )
{

    let p = 0 , n = 0 ;

    for( let i in array )
    {

        if (n < array[i])
        {

            n = array[i];
            p = i ;

        } ;

    } ;

    console.log( p ) ;

} ;

/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6. */
function indiceMenorValor( array )
{

    let p = array[0] , n = 0 ;

    for( let i in array )
    {

        if ( n > array[i] )
        {

            n = array[i] ;
            p = i ;

        } ;

    } ;

    console.log( p ) ;

} ;

/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */
function nomeMaior( array )
{

    let p = "" , n = 0 ;

    for( let i in array )
    {

        if( n < array[i].length )
        {

            n = array[i].length ;
            p = array[i] ;

        };

    } ;

    console.log( p ) ;

} ;

/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. */

function inteiroMaisRepetido( array )
{

    let index = 0 , key = "" ; 
    
    for( let i in array )
    {
        
        let c = 0 ;

        for( let j = 0 ; j <= i ; j++)
        {

            array[i] == array[j] ? c++ : "" ;

        } ;
        
        if( c > index )
        {

            index = c ;
            key = array[i] ; 

        } ;
        
    };

    console.log( key ) ;

};
/* Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15. */

function somatorioN( n )
{

    let p = "" , soma = 0 ;
    for( let i = 1 ; i <= n ; i++ )
    {

        soma += i ;
        p += i ;
        i < n ? p += " + " : "" ;

    } ;

    console.log( p + " = " + soma );

} ;

/*Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true

verificaFimPalavra("trybe", "be");
Retorno esperado: true

verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false */
function finalString( a , b )
{

    let c = 0;

    for( let i = b.length ; i > 0 ; i-- )
    {

        a[i] == b[i] ? c++ : "" ;
        console.log("C:" + c )
    } ;

    return c == 0 ? "true" : "false" ;

};

/* (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:

    | I   | 1    |
    | --- | ---- |
    | IV  | 4    |
    | V   | 5    |
    | IX  | 9    |
    | X   | 10   |
    | XL  | 40   |
    | L   | 50   |
    | XC  | 90   |
    | C   | 100  |
    | CD  | 400  |
    | D   | 500  |
    | CM  | 900  |
    | M   | 1000 |

Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. 

Exemplo: XI = 10 + 1 = 11.
No entanto, se o número pequeno está à esquerda de um número maior que ele, 
ele deve ser subtraído. 

Exemplo: IX = 10 - 1 = 9. */


function romaNumbers( n )
{

    let resultado = 0 , algarismos = 
    {
         I   : 1 
        ,V   : 5 
        ,X   : 10 
        ,XL  : 40 
        ,L   : 50 
        ,XC  : 90  
        ,C   : 100 
        ,CD  : 400 
        ,D   : 500 
        ,CM  : 900 
        ,M   : 1000
    } , p = n.length , a = algarismos[n[0]] , b = algarismos[n[1]], c = algarismos[n[2]] ; 

    if ( p == 1 )
    {
        
        resultado = algarismos[n] ;

    }
    else if( p == 3 )
    {

        resultado = a + b + c ;

    }
    else 
    {

        a == b ? resultado = a + b : resultado = b - a ;

    } ;

    console.log(resultado);

} ;

