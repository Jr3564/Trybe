const {uppercase} = require('./index');

describe('Exercise 1', () => {
  test('callback  string to leters uppercase', done => {
    uppercase('xablau', (strUp) => {
      expect(strUp).toBe('XABLAU');
    })
    done();
  })
})