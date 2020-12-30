const {uppercase} = require('../index');

describe('Test uppercase function', () => {
  test('callback  string to leters uppercase', done => {
    uppercase('xablau', (strUp) => {
      expect(strUp).toBe('XABLAU');
      done();
    })
  })
})