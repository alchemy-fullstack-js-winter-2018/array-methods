const { map, 
  filter, 
  findIndex, 
  reduce,
  every } = require('../lib/index');

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
        /* eslint-disable-next-line */
        const results = map([2, , 4, 6], ele => {
          return ele * 2;
        });
        /* eslint-disable-next-line */
        expect(results).toEqual([4, , 8, 12]);
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
          return ele > 3;
        });
        expect(largerThanThree).toEqual(3);
      });
    });
  });
  describe('implementation', () => {
    describe('findIndex', () => {
      it('can return the index of an element greater than 8', () => {
        const results = findIndex([1, 3, 2, 4, 6], ele => {
          return ele > 8;
        });

        expect(results).toEqual(-1);
      });
    });
  });
  describe('implementation', () => {
    describe('reduce', () => {
      it('can return the sum of all elements in array', () => {
        const results = reduce([1, 3, 2, 4, 6], (acc, ele) => {
          return acc + ele;
        }, 0);

        expect(results).toEqual(16);
      });
    });
    describe('every', () => {
      it('will return true if every element is greater than 9', () => {
        const result = every([10, 28, 37, 100], x => {
          return x > 9;
        }); 

        expect(result).toEqual(true);
      });
      
      it('will return false if one or more elements is not greater than 20', () => {
        const result = every([-10, 0, 10, 28, 37, 100], x => {
          return x > 20;
        }); 

        expect(result).toEqual(false);
      });
    });
  });
});
