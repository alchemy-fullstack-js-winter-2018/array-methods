const {
  map,
  filter,
  findIndex,
  reduce,
  every
} = require('../lib/index');

describe('array methods', () => {

  /////////////////
  // ASSUMPTIONS //
  /////////////////
  describe('assumptions', () => {

    describe('map', () => {
      it('doubles each item in an array', () => {
        const doubled = [2, 4, 6].map(ele => {
          return ele * 2;
        });

        expect(doubled).toEqual([4, 8, 12]);
      });

      it('can double every item and skips holes', () => {
        const arr = [2, 4, , 6];
        const results = arr.map(ele => {
          return 2 * ele;
        });
        expect(results).toEqual([4, 8, , 12]);
      });
    });

    describe('filter', () => {
      it('finds all indices that are less than 5', () => {
        const lessThanFive = [2, 4, 6, 7].filter(ele => {
          return ele < 5;
        });

        expect(lessThanFive).toEqual([2, 4]);
      });
    });

    describe('findIndex', () => {
      it('finds the index of the first element that is less than two', () => {
        const lessThanTwo = [4, 6, 3, 1, 5, 0, -2].findIndex(ele => {
          return ele < 2;
        });

        expect(lessThanTwo).toEqual(3);
      });
    });

    describe('reduce', () => {
      it('sums all the numbers in an array', () => {
        const summedNumbers = [1, 2, 3, 4, 5].reduce((acc, ele) => {
          return acc += ele;
        });

        expect(summedNumbers).toEqual(15);
      });
    });

    describe('every', () => {
      it('checks if every element in the array is greater than 0', () => {
        const posNum = [1, 2, 3, -1, 4].every(ele => {
          return ele > 0;
        });

        expect(posNum).toEqual(false);
      });
    });


  });

  ////////////////////
  // IMPLEMENTATION //
  ////////////////////
  describe('implementation', () => {

    describe('map', () => {
      it('can double every item in an array', () => {
        const results = map([2, 4, 6], ele => {
          return ele * 2;
        });

        expect(results).toEqual([4, 8, 12]);
      });

      it('can double every item and skip holes', () => {
        const results = map([2, 4, , 6], ele => {
          return ele * 2;
        });

        expect(results).toEqual([4, 8, , 12]);
      });


    });

    describe('filter', () => {
      it('finds all indices that are less than 5', () => {
        const lessThanFive = filter([2, 4, 6, 7], ele => {
          return ele < 5;
        });

        expect(lessThanFive).toEqual([2, 4]);
      });
    });

    describe('findIndex', () => {
      it('finds the index of the first element that is less than two', () => {
        const lessThanTwo = findIndex([4, 6, 3, 1, 5, 0, -2], ele => {
          return ele < 2;
        });

        expect(lessThanTwo).toEqual(3);
      });
    });

    describe('reduce', () => {
      it('sums all the numbers in an array', () => {
        const summedNumbers = reduce([1, 2, 3, 4, 5], (acc, ele) => {
          return acc += ele;
        }, 0);

        expect(summedNumbers).toEqual(15);
      });
    });

    describe('every', () => {
      it('checks if every element in the array is greater than 0', () => {
        const posNum = every([1, 2, 3, -1, 4], ele => {
          return ele > 0;
        });

        expect(posNum).toEqual(false);
      });
    });
  });
});
