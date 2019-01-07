const { map } = require('../lib/index');

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
      it('returns an array of numbers greater than 3', () => {
        const greaterThree = [1, 2, 3, 4, 5].filter(ele => {
          return ele > 3;
        });
        expect(greaterThree).toEqual([4, 5]);
      });
    });
    describe('returns only even numbers', () => {
      const evens = [1, 2, 3, 4, 5, 6].filter(ele => {
        return ele % 2 === 0;
      });
      expect(evens).toEqual([2, 4, 6]);
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
  });
});
