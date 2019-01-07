const { map, filter, findIndex } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {

    describe('map', () => {
      it('should square each element number in an array', () => {
        const numbers = [1, 2, 3];
        const squared = numbers.map(x => x * x);
        expect(squared).toEqual([1, 4, 9]);
        expect(squared.length).toEqual(numbers.length);
      });

      it('doubles each item in an array', () => {
        const doubled = [2, 4, 6].map(ele => ele * 2);
        expect(doubled).toEqual([4, 8, 12]);
      });

      it('can double every item and skip hole', () => {
        const evens = filter([1, 2, 3, 4], ele => {
          return ele % 2 === 0;
        });
        expect(evens).toEqual([2, 4]);
      });
    });

    describe('filter', () => {
      it('filters out elements less than 5 from an array', () => {
        const numbers = [1, 7, 4, 2, 9, 3, 7];
        const small = numbers.filter(n => n < 5);
        expect(small).toEqual([1, 4, 2, 3]);
      });
    });

    describe('findIndex', () => {
      it('can find the element value from an array based on index #', () => {
        const nums = [2, 4, 6, 0, 67];
        const index = nums.findIndex((ele) => ele === 67);
        expect(index).toEqual(4);
      });
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

    describe('filter', () => {
      it('can filter elements less than 5 from an array', () => {
        const small = filter([1, 7, 4, 2, 9, 3, 7], ele => {
          return ele < 5;
        });
        expect(small).toEqual([1, 4, 2, 3]);
      });
    });

    describe('findIndex', () => {
      it('can find the index # from an array based on element value', () => {
        const index = findIndex([2, 4, 6, 0, 67], ele => {
          return ele === 67;
        });
        expect(index).toEqual(4);
      });
    });

    describe('reduce', () => {});
    describe('every', () => {});
  });
});
