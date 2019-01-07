const map = require('./map');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('double the array [1, 2, 3, 4]', () => {
        const results = map([1, 2, 3, 4], ele => ele * 2);
        expect(results).toEqual([2, 4, 6, 8]);
      });
    });
  });
});
