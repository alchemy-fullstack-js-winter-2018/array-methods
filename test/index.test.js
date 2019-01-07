const { map, filter, findIndex } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('double each item in array', () => {
        const double = [1, 2, 3, 4].map(ele => {
          return ele * 2;
        });
        expect(double).toEqual([2, 4, 6, 8]);
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
  });
  describe('assumptions', () => {
    describe('filter', () => {
      it('returns even items', () => {
        const even = [1, 2, 3, 4].filter(ele => {
          return ele % 2 === 0;
        });
        expect(even).toEqual([2, 4]);
      });
    });
  });
  describe('implementation', () => {
    describe('filter', () => {
      it('can return even items from array', () => {
        const results = filter([1, 3, 2, 4, 6], ele => {
          return ele % 2 === 0;
        });

        expect(results).toEqual([2, 4, 6]);
      });
    });
  });
  describe('assumptions', () => {
    describe('findIndex', () => {
      it('returns first index of an element greater than 3', () => {
        const largerThanThree = [1, 2, 3, 4].findIndex(ele => {
          return ele === 3;
        });
        expect(largerThanThree).toEqual(2);
      });
    });
  });
  describe('implementation', () => {
    describe('findIndex', () => {
      it('can return the index of an element greater than 2', () => {
        const results = findIndex([1, 3, 2, 4, 6], ele => {
          return ele === 1;
        });

        expect(results).toEqual(1);
      });
    });
  });
});
