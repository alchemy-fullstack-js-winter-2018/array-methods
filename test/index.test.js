const { map } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {

    describe('map', () => {
      it('should square each element number in an array', () => {
        const numbers = [1, 2, 3];
        const squared = numbers.map(x => x * x);
        expect(squared).toEqual([1, 4, 9]);
      });

      it('doubles each item in an array', () => {
        const doubled = [2, 4, 6].map(ele => ele * 2);
        expect(doubled).toEqual([4, 8, 12]);
      });
    });

    describe('filter', () => {
      it('should filter an element from array based on condition', () => {

      });
    });

    describe('findIndex', () => {

    });

    describe('reduce', () => {

    });

    describe('every', () => {

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
