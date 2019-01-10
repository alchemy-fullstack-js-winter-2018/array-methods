const { 
  map,
  filter,
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

});
