const { map, filter, findIndex, reduce, every } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('doubles each item in array', () => {
        const doubled = [2, 4, 6].map(ele => {
          return ele * 2;
        });

        expect(doubled).toEqual([4, 8, 12]);
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
      it('can return the sum of all integers in an array', () => {
        const sum = [3, 6, 9].reduce((acc, val) => {
          return acc + val;
        }); 
        expect(sum).toEqual(18);
      });

      it('can return the product of integers in an array', () => {
        const product = [1, 2, 3].reduce((acc, val) => {
          return acc * val;
        }); 
        expect(product).toEqual(6);
      });
    });

    describe('every', () => {
      it('can return true if every element is greater than 0', () => {
        const postive = [1, 20, 35, 100].every(x => {
          return x > 0;
        });
        expect(postive).toEqual(true);
      });
  
      it('can return false if one or more elements is less than 0', () => {
        const positive = [-10, -20, 0, 1, 10, 20].every(x => {
          return x > 0;
        });
        expect(positive).toEqual(false);
      });
    });

  describe('implementation', () => {
    describe('map', () => {
      it('can double every item in an array', () => {
        const results = map([2, 4, 6], ele => {
          return ele * 2;
        });

        expect(results).toEqual([4, 8, 12]);
      });
    });

    describe('filter', () => {
      it('can return only even numbers', () => {
        const results = filter([1, 2, , 3, 4], ele => {
          return ele % 2 === 0;
        });
        expect(results).toEqual([2, 4]);
      });
    });

    describe('findIndex', () => {
      it('returns the index of the first item in the array greater than 5', () => {
        const results = findIndex([3, 5, , 7, 9], ele => {
          return ele > 5;
        });
        expect(results).toEqual(3);
      });
    });

    describe('reduce', () => {
      it('can sum array of numbers together', () => {
        const results = reduce([1, 2, 3], (acc, ele) => {
          return acc + ele;
        }, 0);
        expect(results).toEqual(6);
        });
      });
    
    describe('every', () => {
      it('can return true if all numbers in array are less than 50', () => {
        const results = every([1, 20, 35, 49], ele => {
          return ele < 50;
        });
        expect(results).toEqual(true);
      });

      it('can return false if one or more elements is greater than 50', () => {
        const results = every([0, 1, 10, 20, 35, 1000], x => {
          return x > 50;
        });
        expect(results).toEqual(false);
      });
    });
  });
});
