/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n 

1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

n = 5

*****
*****
*****
*****
*****
*/
function quadradoAsteristicos( n )
{

    for( let i = 0 ; i < n ; i++ )
    {

        let asteristicosArray = "" ;

        for ( let j = 0 ; j < n ; j++ )
        {

            asteristicosArray += "*" ;

        } ;

        console.log( asteristicosArray ) ;

    } ;

} ;

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
Por exemplo:

n = 5

*
**
***
****
*****
*/
function trianguloRetanguloAsteristicos( n )
{

    for( let i = 0 ; i < n ; i+= 1 )
    {

        let asteristicosArray = "" ;

        for ( let j = 0 ; j <= i ; j++ )
        {

            asteristicosArray += "*" ;

        } ;

        console.log(asteristicosArray) ;

    } ;

} ;

/* 3- Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/
function trianguloInvertido( n )
{

    for( let i = n ; i > 0 ; i-- )
    {

        let asteristicosArray = "" , espacos = "" ;

        for ( let j = 0 ; j < i ; j++ )
        {

            espacos += " " ;
            
        } ;

        for ( let l = n ; l >= i ; l-- )
        {

            asteristicosArray += "*" ;

        } ;

        console.log( espacos + asteristicosArray ) ;

    } ;

} ;

/* 4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****
 */
function trianguloEmDobro( n )
{

    for( let i = n ; i > 0 ; i -= 2 )
    {

        let asteristicosArray = "" , espacos = "" ;

        for ( let j = 0 ; j < i ; j+=2 )
        {

            espacos += " " ;
            
        } ;

        for ( let l = n ; l >= i ; l-- )
        {

            asteristicosArray += "*" ;

        } ;

        console.log( espacos + asteristicosArray ) ;

    } ;
    
}

/* 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

n = 7

   *
  * *
 *   *
*******
 */

function piramideOca( n )
{

    for( let i = 0 ; i < n ; i += 2 )
    {

        let asteristicosArray = "" , espacos = "" ;

        for( let j = n ; j > i ; j -= 2 )
        {

            espacos += " " ;

        } ;

        for ( let l = 0 ; l <= i; l += 1 )
        {

            l == 0 || l == i || i == (n - 1) ? asteristicosArray += "*" : asteristicosArray += " " ;

        } ;

        console.log( espacos + asteristicosArray ) ;

    } ;
    

} ;

/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.

Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, 
a divisão dele com quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, 
vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.  */
function numeroPrimo( n )
{

    let c = 0 ;

    for ( let i = 1 ; i <= n ; i += 1 )
    {

        if( n % i == 0 ) 
        {

            c++ ;

        } ;

    } ;

    return c == 2 ? "È primo!" :"Não é primo!" ;


} ;
