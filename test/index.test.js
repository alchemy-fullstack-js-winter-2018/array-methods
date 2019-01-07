const { map, filter, findIndex, reduce, every } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('can add three to each item in an array', () => {
        const addedThree = [1, 2, 3, 4].map(num => {
          return num + 3;
        });
        expect(addedThree).toEqual([4, 5, 6, 7]);
      });
    });

    describe('filter', () => {
      it('can return only odd numbers from an array', () => {
        const odds = [1, 2, 3, 4, 5].filter(x => {
          return x % 2 !== 0;
        });
        expect(odds).toEqual([1, 3, 5]);
      });
    });

    describe('findIndex', () => {
      it('can return the index of the first item that is greater than 3', () => {
        const firstIndex = [1, 2, 3, 4, 5].findIndex(x => {
          return x > 3;
        });
        expect(firstIndex).toEqual(3);
      });
    });

    describe('reduce', () => {
      it('can return the sum of integers in an array', () => {
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
        const positive = [1, 20, 35, 100].every(x => {
          return x > 0;
        }); 
        expect(positive).toEqual(true);
      });

      it('can return false if one or more array elements is not greater than 0', () => {
        const positive = [-10, -20, 0, 1, 20, 35, 100].every(x => {
          return x > 0;
        }); 
        expect(positive).toEqual(false);
      });
    });
  });

  describe('implementation', () => {
    describe('map', () => {
      it('can add 3 to each number', () => {
        const results = map([1, 2, 3, 4, 5], x => {
          return x + 3;
        });
        expect(results).toEqual([4, 5, 6, 7, 8]);
      });

      it('can add 3 to each number and can deal with holes', () => {
        //eslint-disable-next-line
        const results = map([1, 2, , 4, 5], x => {
          return x + 3;
        });
        //eslint-disable-next-line
        expect(results).toEqual([4, 5, , 7, 8]);
      });
    });

    describe('filter', () => {
      it('can return numbers greater than 3', () => {
        const results = filter([1, 2, 3, 4, 5], x => {
          return x > 3;
        });
        expect(results).toEqual([4, 5]);
      });
    });

    describe('findIndex', () => {
      it('return the index of the first item that is greater than 1', () => {
        const results = findIndex([1, 2, 3, 4, 5], x => {
          return x > 1;
        });
        expect(results).toEqual(1);
      });
    });

    describe('reduce', () => {
      it('return the sum of integers in an array', () => {
        const results = reduce([1, 2, 3, 4, 5], (acc, val) => {
          return acc + val;
        });
        expect(results).toEqual(15);
      });
    });

    describe('every', () => {
      it('can return true if every element is greater than 0', () => {
        const result = every([10, 20, 33, 1000], x => {
          return x > 0;
        }); 
        expect(result).toEqual(true);
      });

      it('can return false if one or more elements is not greater than 0', () => {
        const result = every([-100, 0, 10, 20, 33, 1000], x => {
          return x > 0;
        }); 
        expect(result).toEqual(false);
      });
    });
  });
});
