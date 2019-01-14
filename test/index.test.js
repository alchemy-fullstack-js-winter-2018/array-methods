const { 
  map,
  filter,
  indexOf
} = require('../lib/index');

describe('array methods', () => {

  describe('assumptions', () => {
    describe('map', () => {
      it('double the numbers in the array', () => {
        const double = [1, 2, 3, 4].map(ele => {
          return ele * 2;
        });
        expect(double).toEqual([2, 4, 6, 8]);
      });
    });
  });

  describe('filter', () => {
    it('takes out odd numbers', () => {
      const filtered = [1, 2, 3].filter(ele => {
        return ele % 2 === 0;
      });
      expect(filtered).toEqual([2]);
    });
  });

  describe('findIndex', () => {
    it('finds first index greater than 5', () => {
      const index = [1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(ele => {
        return ele > 5;
      });
      expect(index).toEqual(5);
    });
  });

  describe('reduce', () => {
    it('can get the sum of an array', () => {
      const reduced = [1, 2, 3].reduce((acc, ele) => {
        return acc += ele;
      }, 0);
      expect(reduced).toEqual(6);
    });
  });

});
