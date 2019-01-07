const { map } = require('../lib/index');
const { filter } = require('../lib/index');
const { indexOf } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('adds 3 to each number', () => {
        const plusThree = [1, 2, 3].map(ele => {
          return ele + 3;
        });
        expect(plusThree).toEqual([4, 5, 6]);
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
    describe('findIndex', () => {
      it('finds first index greater than 4', () => {
        const indexed = [1, 2, 3, 4, 5, 6, 7, 8].findIndex(ele => {
          return ele > 4;
        });
        expect(indexed).toEqual(4);
      });
    });
    describe('reduce', () => {
      it('adds all numbers together', () => {
        const reduced = [1, 2, 3].reduce((ele, acc) => {
          return acc += ele;
        });
        expect(reduced).toEqual(6);
      });
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
      it('remove even numbers from an array', () => {
        const results = filter([1, 2, 3, 4, 5, 6, 7, 8], ele => {
          return ele % 2 !== 0;
        });
        expect(results).toEqual([1, 3, 5, 7]);
      });
    });
    describe('indexOf', () => {
      it('returns first index greater than 3', () => {
        const results = indexOf([1, 2, 3, 4, 5, 6], ele => {
          return ele > 3;
        });
        expect(results).toEqual(3);
      });
    });
  });
});
