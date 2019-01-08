const { map, 
  filter, 
  findIndex, 
  reduce,
  every } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('adds one to each item in the array', () => {
        const doubled = [1, 2, 3].map(ele => {
          return ele * 2;
        });
        expect(doubled).toEqual([2, 4, 6]);
      });
    });
    describe('filter', () => {
      it('returns only even numbers', () => {
        const evens = [1, 2, 3, 4, 5, 6].filter(ele => {
          return ele % 2 === 0;
        });
        expect(evens).toEqual([2, 4, 6]);
      });
    });
    describe('findIndex', () => {
      it('returns the index of the first element greater than 5', () => {
        const greater = [3, 5, 7, 9].findIndex(ele => {
          return ele > 5;
        });
        expect(greater).toEqual(2);
      });
    });
    describe('reduce', () => {
      it('can get the sum of an array', () => {
        const arr = [1, 2, 3, 4];
        const sum = arr.reduce((acc, index) => {
          return acc + index;
        }, 0);
        expect(sum).toEqual(10);
      });
    });
    describe('every', () => {
      it('can return true if all values in array are less than 30', () => {
        const lessThan = [10, 11, 15, 22].every(ele => {
          return ele < 30;
        });
        expect(lessThan).toEqual(true);
      });
    });
  });

  describe('implementation', () => {
    describe('map', () => {
      it('can double every item in an array', () => {
        // eslint-disable-next-line
        const results = map([2, 4, , 6], ele => {
          return ele * 2;
        });
        // eslint-disable-next-line
        expect(results).toEqual([4, 8, , 12]);
      });
    });
    describe('filter', () => {
      it('can return only even numbers', () => {
        // eslint-disable-next-line
        const results = filter([1, 2, , 3, 4], ele => {
          return ele % 2 === 0;
        });
        expect(results).toEqual([2, 4]);
      });
    });
    describe('findIndex', () => {
      it('returns the index of the first item in the array greater than 5', () => {
        // eslint-disable-next-line        
        const results = findIndex([3, 5, , 7, 9], ele => {
          return ele > 5;
        });
        expect(results).toEqual(3);
      });
    });
    describe('reduce', () => {
      it('gets the sum of the array', () => {
        // eslint-disable-next-line
        const results = reduce([1, 2, , 3, 4], (acc, currentValue) => {
          return acc + currentValue;
        }, 0);
        expect(results).toEqual(10);
      });
      it('gets the sum of the array when there is no accumulator', () => {
        const results = reduce([1, 2, 3, 4], (acc, currentValue) => {
          return acc + currentValue;
        });
        expect(results).toEqual(10);
      });
    });
    describe('every', () => {
      it('can return true if all numbers in an array are less than 30', () => {
        // eslint-disable-next-line
        const results = every([10, 11, , 15, 29], ele => {
          return ele < 30;
        });
        expect(results).toEqual(true);
      });
    });
  });
});
