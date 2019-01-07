const { map } = require('../lib/index');

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
    
    describe('filter', () => {
      it('returns the numbers greater than 3', () => {

      });
    });

    describe('implementation', () => {
      describe('map', () => {
        it('can double numbers in every array', () => {
          const results = map([2, 4, 6], ele => {
            return ele * 2;
          });

          expect(results).toEqual([4, 8, 12]);
        });
      });
    });
  });
});
