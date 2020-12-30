
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Nesse primeiro exercício, 
percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
function imprimeTodosValores()
{
    
    console.log(numbers);

};

/* Para o segundo exercício, você deve somar todos os valores contidos no array e 
imprimir o resultado;
 */
function somaTodosImprime()
{
    
    let soma = 0 ;

    for( let i = 0 ; i < numbers.length ; i++ )
    {

        soma += numbers[i] ;

    };

    return soma;


};

/* Para o terceiro exercício, calcule e imprima a média aritmética dos
 valores contidos no array;
 */
 function mediaNumbers()
 {

    return somaTodosImprime() / numbers.length;

 };

 /* Com o mesmo código do exercício anterior, caso valor final seja maior que 20, 
 imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
 "valor menor ou igual a 20"; */
 function valorMaiorQue20()
 {

   return mediaNumbers() > 20 ? "valor maior que 20" : "valor menor ou igual a 20" ;

 };

 /* Utilizando for, descubra qual o maior valor contido no array e imprima-o; */
function maiorValorContido()
{

    let maiorNumero = 0 ;

    for( let i = 0 ; i < numbers.length ; i++ )
    {

        maiorNumero > numbers[i] ? "" : maiorNumero = numbers[i] ;

    }

    return maiorNumero ;

};

/* Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
function quantosValoresImpares()
{

    let quantidade = 0 ;

    for( let i = 0 ; i < numbers.length ; i++ )
    {

        numbers[i] % 2 == 0 ? "" : quantidade++ ;

    };

    return quantidade ;

}

/* Utilizando for, descubra qual o menor valor contido no array e imprima-o;
 */
function menorValorContido()
{


    let menorNumero = numbers[0] ;

    for( let i = 0 ; i < numbers.length ; i++ )
    {

        menorNumero < numbers[i] ? "" : menorNumero = numbers[i] ;

    }

    return menorNumero ;

};

/*Bônus
Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:


for (let i = 1; i < array.length; i++) 
{
  
  for (let j = 0; j < i; j++)
  {

    if (array[i] < array[j]) 
    {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    
    }
  }
}

Ordene o array numbers em ordem crescente e imprima seus valores;

Ordene o array numbers em ordem decrescente e imprima seus valores;

Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. 
Cada valor do novo array deverá ser igual ao valor correspondente no array numbers
multiplicado pelo seguinte. 

 Por exemplo: o primeiro valor do novo array deverá ser 45, 
 pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). 
 Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 
 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, 
 a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. 
 O resultado deve ser o array abaixo:


[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54] */

/*Ordene o array numbers em ordem crescente e imprima seus valores;*/
function ordemCrescente()
{   

    let numbers2 = numbers ;

    for( let i = 0 ; i < numbers2.length ; i++)
    {   
        
        for( let j = 0 ; j < numbers2.length ; j++ )
        {   

            if (numbers2[i] < numbers2[j]) 
            {

              let position = numbers2[i] ;
        
              numbers2[i] = numbers2[j] ;
              numbers2[j] = position ;
            
            } ;

        };

    };

    return numbers2;

}

/* Ordene o array numbers em ordem decrescente e imprima seus valores;
 */
function ordemDecrescente()
{   

    let numbers2 = numbers ;

    for( let i = 0 ; i < numbers2.length ; i++)
    {   
        
        for( let j = 0 ; j < numbers2.length ; j++ )
        {   

            if (numbers2[i] > numbers2[j]) 
            {

              let position = numbers2[i];
        
              numbers2[i] = numbers2[j];
              numbers2[j] = position;
            
            } ;

        } ;

    } ;

    return numbers2;

}

/* Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. 
Cada valor do novo array deverá ser igual ao valor correspondente no array numbers
multiplicado pelo seguinte. */
function multipliqueOProximo()
{

    let i = 0 , multiplicados = [] ;


       while( numbers[i] != undefined )
        { 
            numbers[i + 1] == undefined ?
            multiplicados.push( numbers[i] * 2) :
            multiplicados.push( numbers[i] * numbers[i+1]) ;
            i++;

        } ;
        
        

    return multiplicados ;

};
