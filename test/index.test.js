const { map, filter, findIndex, reduce } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () =>  {
      it('doubles each item in an array', () => {
        const doubled = [2, 4, 6].map(ele => {
          return ele * 2;
        });
        expect(doubled).toEqual([4, 8, 12]);
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
      it('can filter out odds', () => {
        const evens = filter([1, 2, 3, 4], ele => {
          return ele % 2 === 0;
        });
        expect(evens).toEqual([2, 4]);
      });
    });

    describe('reduce', () => {
      it('reduces to one number', () => {
        const sum = reduce([2, 4], ele => {
          return ele[0] + ele[1];
        });
        expect(sum).toEqual(6);
      });
    });
  }); 
}); 

// describe('findIndex', () => {
//   it('returns the index at the given index', () => {
//     const indexOf = findIndex([1, 3, 6, 9], ele => {
//       return ele;
//     });
//     expect(indexOf).toEqual([0 || 1 || 2 || 3]);
//   });
// });
