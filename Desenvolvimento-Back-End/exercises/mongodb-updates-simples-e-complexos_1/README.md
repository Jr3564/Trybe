Agora, a prática!
Para os exercícios, você utilizará um dataset pequeno com alguns filmes.
Conecte-se à sua instância do MongoDB local e insira os seguintes documentos na coleção movies do banco de dados class :

{
"title": "Batman",
"category": [ "action", "adventure" ],
"imdbRating": 7.6,
"budget": 35
},
{
"title": "Godzilla",
"category": [ "action", "adventure", "sci-fi" ],
"imdbRating": 6.6
},
{
"title": "Home Alone",
"category": [ "family", "comedy" ],
"imdbRating": 7.4
}

Verifique se você tem três documentos na coleção.
Para cada execução, utilize o método find() para conferir as alterações nos documentos
O MongoDb possui diversas ferramentas, como, por exemplo, mongo , mongo sh , Compass e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries , o importante é realizá-las.
