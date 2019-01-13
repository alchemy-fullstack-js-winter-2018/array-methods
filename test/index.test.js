const { map, filter, findIndex, reduce, every } = require('../lib/index');

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

  // ele = function
  describe('findIndex', () => {
    it('looks for a given number and returns its index, if found', () => {
      const arr = [1, 3, 6, 9];
      const indexAt = findIndex(arr, ele => {
        return ele === 3;
      });
      expect(indexAt).toEqual(1);
    });
  });

  describe('every', () => {
    it('checks that all items in array return true', () => {
      const arr = [1, 2, 5, 7, 8];
      const checks = every(arr, ele => {
        if(arr.length > 0) {
          return true;
        }
      });
      expect(checks).toBeTruthy;
    });
  });
});

//   describe('for each'... => {
//     it(squared..) => {
//       let results = []
//       foreach{list array here] => {};
//       square logic here}
//     }
// }); 
