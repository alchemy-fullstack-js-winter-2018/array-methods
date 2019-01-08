const { map, filter, findIndex, reduce, every } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('add 1 to every index in array', () => {
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

    describe('every', () => {
      it('return true if number is even', () => {
        const everyArray = [2, 4, 6, 8].every(ele => {
          return ele % 2 === 0;
        });
        expect(everyArray).toEqual(true);
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

      describe('findIndex', () => {
        it('find index of 8 in the array', () => {
          const results = findIndex([1, 4, 7, 8], ele => {
            return ele === 8;
          });
          expect(results).toEqual(3);
        });     
      });

      describe('reduce', () => {
        it('find sum of the array', () => {
          const sum = reduce([1, 2, 3, 4], (acc, ele) => {
            return ele += acc;
          }, 0);
          expect(sum).toEqual(10);
        });    
      });

      describe('every', () => {
        it('return true if each value in array is even', () => {
          const checkArray = every([2, 4, 6, 8], ele => {
            if(ele % 2 === 0) {
              return true;
            }
          });
          expect(checkArray).toEqual(true);
        });    
      });
    });
  });
});

