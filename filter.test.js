const filter = require('./filter');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('filter', () => {
      it('return even elements the array [1, 2, 3, 4]', () => {
        const results = filter([1, 2, 3, 4], ele => ele % 2 === 0);
        expect(results).toEqual([2, 4]);
      });
    });
  });
});
