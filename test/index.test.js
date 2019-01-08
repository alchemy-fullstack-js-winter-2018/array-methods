const { 
  map,
  filter,
  findIndex,
  reduce,
  every
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

    describe('reduce', () => [
      it('returns the sum of the array', () => {
        const sum = [1, 2, 3].reduce((acc, ele) => {
          return acc + ele;
        }, 0);
        expect(sum).toEqual(6);
      })
    ]);

    describe('every', () => {
      it('returns true if every item in the array is even', () => {
        const every = [2, 4, 6, 8].every(ele => {
          return ele % 2 === 0;
        });
        expect(every).toEqual(true);
      });
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

      it('can double numbers and skip holes', () => {
        const arr =[2, 4, ,6];
        const results = map(arr, ele => ele * 2);
        
        expect(results).toEqual([4, 8, ,12]);

      });
    });

    describe('filter', () => {
      it('can return numbers less than 3 in every array', () => {
        const filterResults = filter([1, 2, 3, 4], ele => {
          return ele < 3;
        });
        expect(filterResults).toEqual([1, 2]);
      });

      it('can return numbers less than 3 and skip holes', () => {
        const filterResults = filter([1, 2, 3, ,4], ele => {
          return ele < 3;
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

    describe('reduceMethod', () => {
      it('can return the sum of the each array', () => {
        const sum = reduce([1, 2, 3, 4], (acc, ele) => { 
          return acc + ele;
        }, 0);
        expect(sum).toEqual(10);
      });
      it('can sum an array with no accumulator', () => {
        const sum = reduce([1, 2, 3, 4], (acc, ele) => {
          return acc + ele;
        });
        expect(sum).toEqual(10);
      });
    });

    describe('every', () => {
      it('can return true for all array with even numbers', () => {
        const everyResults = every([2, 4, 6, 8], ele => {
          return ele % 2 === 0;
        });
        expect(everyResults).toEqual(true);
      });
    });

  });
});
