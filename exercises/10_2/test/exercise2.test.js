const  { getUserName } = require('../index');

/** Utilizando a sintaxe de Promise,
 * faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado,
 * e também um teste para o caso em que o usuário não é encontrado.
Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users,
para saber quais IDs existem. */

describe('Test getUserName function', () => {
  it('When user is found', () => {
    return expect(getUserName(4)).resolves.toBe('Mark');
  })
  it('When user is not found', () => {
    return expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' });
  })
});