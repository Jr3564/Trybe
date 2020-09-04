/*
    ***************
    *   * *** *   *
    **   * * *   **
    ***   * *   ***
    ****   *   ****
    *****     *****
    ******   ******
    ******   ******

    ***   * * *   ***       
    ****   * *   ****
    *****   *   *****
    ******     ******   
    *******   *******   7 + 3 + 7
    *******   *******   7 + 3 + 7
    *******   *******   7 + 3 + 7
    *******   *******   7 + 3 + 7
    *****************   17     
*/
function loTry( n , a , e )
{

    for( let i = 0 ; i < n ; i += 2 )
    {

    console.log( tRe( i , n , a )  + eT( i , n , e, true ) + tRe( i , n , a ) ) ;

    } ;

} ;

function tRe( i , n , a )
{

    let alg = a ;

    for ( let j = 0 ; j <= i ; j++ )
    {

        alg += a ;

    } ;

    return alg ;

};

function eT( i , n , e , b )
{

    let esp = "" ;

    if (b === false )
    {

        for( let j = n ; j > i ; j -= 1 )
        {

            esp += e ;

        } ;

    return esp ;
    } 
    else
    {

        for( let j = 0 ; j <= i ; j += 1 )
        {
    
            esp += e ;
    
        } ;
    
        return esp ;

    } ;

} ;

function tOco( i , n , a , e )
{

    let alg = "" ;

    for ( let j = 0 ; j <= i; j += 1 )
    {

        j == 0 || j == i || i == (n - 1) ? alg += e : alg += a ;

    } ;

    return alg ;

} ;
loTry(9 , "*" , "." ) ;