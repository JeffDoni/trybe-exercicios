const myRemove = require('./myremove')

describe('Testa funcção myRemove', () => {
    it('Retorna array [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
  })