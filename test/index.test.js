const { map, filter, findIndex } = require('../lib/index');

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
      it('returns only even numbers', () => {
        const results = filter([1, 2, 3, 4], ele => {
          return ele % 2 === 0;
        });
        expect(results).toEqual([2, 4]);
      });
    });
    describe('findIndex', () => {
      it('returns the index of the first item in the array greater than 5', () => {
        const results = findIndex([3, 5, 7, 9], ele => {
          return ele > 5;
        });
        expect(results).toEqual(2);
      });
    });
  });
});
