const { 
  map,
  filter,
  findIndex
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
    
    describe('filter', () => {
      it('returns the numbers less than 3', () => {
        const filter = [1, 2, 3, 4, 5].filter(ele => {
          return ele < 3;
        });
        expect(filter).toEqual([1, 2]);

      });
    });

    describe('findIndex', () => {
      it('returns the first number that is even', () => {
        const findIndex = [3, 7, 2, 4].findIndex(ele => {
          return ele % 2 === 0;
        });
        expect(findIndex).toEqual(2);
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

      describe('filter', () => {
        it('can return numbers less than 3 in every array', () => {
          const filterResults = filter([1, 2, 3, 4], ele => {
            return ele < 3 ;
          });
          expect(filterResults).toEqual([1, 2]);
        });
      });
      
      describe('findIndex', () => {
        it('can return first even number in every array', () => {
          const indexResults = findIndex([3, 7, 6, 4], ele => {
            return ele % 2 === 0;
          });
          expect(indexResults).toEqual(2);
        });
      });
    });
  });
});
