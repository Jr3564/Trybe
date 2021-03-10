/** Exercício 1:
 * Inspecione um documento para que você se familiarize com eles.
 * Entenda os campos e os níveis existentes no documento escolhido.
 * */

db.superheroes.findOne();

/* >>>>
{
  "_id": ObjectId("6048cfe5f4ccd8b93ebcbe03"),
  "name": "Abe Sapien",
  "alignment": "good",
  "gender": "Male",
  "race": "Icthyo Sapien",
  "aspects": {
    "eyeColor": "blue",
    "hairColor": "No Hair",
    "skinColor": "blue",
    "height": 191,
    "weight": 29.48
  },
  "publisher": "Dark Horse Comics"
}
*/

/** Exercício 2:
 * Selecione todos os super-heróis com menos de 1.80m de altura.
 * Lembre-se de que essa informação está gravada em centímetros.
 * */

db.superheroes.find({
  "aspects.height": { $lt: (1.80 * 100) }
});

/**
 * Exercício 3:
 * Retorne o total de super-heróis menores que 1.80m.
 */

db.superheroes.count({
  "aspects.height": { $lt: (1.80 * 100) }
});

/** Exercício 4:
 * Retorne o total de super-heróis com até 1.80m.
 */

db.superheroes.count({
  "aspects.height": { $gte: (1.80 * 100) }
});

/** Exercício 5:
 * Selecione um super-herói com 2.00m ou mais de altura.
*/

db.superheroes.findOne({
  "aspects.height": { $gte: (2 * 100) }
});

/** Exercício 6:
 * Retorne o total de super-heróis com 2.00m ou mais.
 */

db.superheroes.count({
  "aspects.height": { $gte: (2 * 100) }
});

/** Exercício 7:
 * Selecione todos os super-heróis que têm olhos verdes.
 */

db.superheroes.find({
  "aspects.eyeColor": { $eq: "green" }
});

/** Exercício 8
 *  Retorne o total de super-heróis com olhos azuis.
 */

db.superheroes.count({
  "aspects.eyeColor": { $eq: "blue" }
});

/** Exercício 10:
 * Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
 * */

db.superheroes.count({
  "aspects.hairColor": { $in: ["No Hair", "black"]}
});

/** Exercício 11:
 * Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
*/

db.superheroes.count({
  $or: [
    { "aspects.hairColor": { $ne: "black" } },
    { "aspects.hairColor": "No Hair" }
  ]
});

/** Exercício 12:
 * Utilizando o operador $not ,
 * retorne o total de super-heróis que não tenham mais de 1.80m de altura.
 */

db.superheroes.count({
  "aspects.height": { $not: { $eq: (1.80 * 100) } }
});

/** Exercício 13:
 * Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m .
 * */

db.superheroes.find({
  $and: [
    { "race": { $ne: "Human"} },
    { "aspects.height": { $not: { $gt: (1.80 * 100) } } }
  ]
});

/**  Exercício 14:
 * Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .
*/

db.superheroes.find({
  $and: [
    { "aspects.height": { $in: [(1.80 * 100), (2 * 100)] } },
    { "publisher": { $eq: "Marvel Comics" } }
  ]
});

/** Exercício 15:
 * Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .
 */

db.superheroes.find({
  $and: [
    { "aspects.weight": {$gte: 80} },
    { "aspects.weight": {$lte: 100} },
    { $or : [
        { "race": {$eq: "Human"} },
        { "race": {$eq: "Mutant"} }
      ]
    },
    { "publisher": { $ne: "DC Comics" } }
  ]
});

/** Exercício 16:
 * Retorne o total de documentos que não contêm o campo race .
 */

db.superheroes.count({ "race": {$exists: false} });

 /** Exercício 17:
  * Retorne o total de documentos que contêm o campo hairColor .
 */
db.superheroes.count({ "hairColor": {$exists: true} });

  /** Exercício 18:
   * Remova apenas um documento publicado pela Sony Pictures .
 */

db.superheroes.deleteOne({ "publisher": "Sony Pictures" });

/** Exercício 19:
 * Remova todos os documentos publicados pelo George Lucas .
 */

 db.superheroes.deleteMany({ "publisher": "George Lucas" });