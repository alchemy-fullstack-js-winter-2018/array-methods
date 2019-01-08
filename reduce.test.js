const reduce = require('./reduce');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('reduce', () => {
      it('reduce to product of elements', () => {
        const results = reduce([1, 2, 3, 4], (total, ele) => total * ele, 2);
        expect(results).toEqual(48);
      });

      it('reduce to product of elements', () => {
        const results = reduce([1, 2, 3, 4], (total, ele) => total * ele);
        expect(results).toEqual(24);
      });
    });
  });
});
