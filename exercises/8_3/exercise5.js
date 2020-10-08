    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce( (acc, current) => {
    const array = current.toLowerCase().split('');
    for(index of array) {
      if( index === 'a') {
        acc++;
      }
    }
    return acc;
  }, 0)
}
assert.deepStrictEqual(containsA(), 20);

/**Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
 */