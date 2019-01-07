const { map, filter } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('can add 1 to every index in array', () => {
        const addedOne = [1, 2, 3, 5].map(ele => {
          return ele + 1;
        });
        expect(addedOne).toEqual([2, 3, 4, 6]);
      });
    });

    describe('filter', () => {
      it('only return greater than 2', () => {
        const filtered = [1, 2, 3, 5].filter(ele => {
          return ele > 2;
        });
        expect(filtered).toEqual([3, 5]);
      });
    });
    
    describe('implementation', () => {
      describe('map', () => {
        it('can add 1 to every index', () => {
          const results = map([1, 2, 3, 5], ele => {
            return ele + 1;
          });
          expect(results).toEqual([2, 3, 4, 6]);
        });     
      });

      describe('filter', () => {
        it('return number greater than 2', () => {
          const results = filter([1, 2, 3, 5], ele => {
            return ele > 2;
          });
          expect(results).toEqual([3, 5]);
        });     
      });
    });
  });
});

