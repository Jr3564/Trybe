const  { getUserName } = require('../index');

/** Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
Dica: Utilize o try/catch para o caso de erro. */

describe('Test getUserName function', () => {
  it('When user is found', async () => {
    expect.assertions(1);
    const id = await getUserName(4);
    expect(id).toBe('Mark');
  }),
  it('When user is not found', async (done) => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
      done();
    }  })
});