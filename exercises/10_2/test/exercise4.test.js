/** O código abaixo busca no GitHub de um usuário, de acordo com a URL,
 * seus repositórios, e retorna uma lista como resultado.
 * Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os
 * repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator'
 * se encontram nessa lista. */

const  { getRepos } = require('../index');

describe('test the existence of the repositories', () => {
    test('sd-01-week4-5-project-todo-list and sd-01-week4-5-project-todo-list', () => {
      return getRepos('https://api.github.com/users/tryber/repos')
      .then(result => {
        expect(result).toContain('sd-01-week4-5-project-todo-list'); 
        expect(result).toContain('sd-01-week4-5-project-meme-generator');
      })
    })
})