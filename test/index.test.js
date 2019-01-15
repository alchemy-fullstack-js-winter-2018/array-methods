const { 
  map,
  filter,
  indexOf,
  reduce,
  every
} = require('../lib/index');

describe('array methods', () => {

  describe('assumptions', () => {
    describe('map', () => {
      it('double the numbers in the array', () => {
        const double = [1, 2, 3, 4].map(ele => {
          return ele * 2;
        });
        expect(double).toEqual([2, 4, 6, 8]);
      });
      
      it('double the numbers and skip holes', () => {
        const arr = [1, 2, , 4];
        const results = arr.map(ele => {
          return ele * 2;
        });
        expect (results).toEqual([2, 4, ,8]);
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
      it('finds first index greater than 5', () => {
        const index = [1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(ele => {
          return ele > 5;
        });
        expect(index).toEqual(5);
      });
    });

    describe('reduce', () => {
      it('can get the sum of an array', () => {
        const reduced = [1, 2, 3].reduce((acc, ele) => {
          return acc += ele;
        }, 0);
        expect(reduced).toEqual(6);
      });
    });

    describe('every', () => {
      it('returns true if all items are greater than 0', () => {
        const results = [1, 2, 3].every(ele => {
          return ele > 0;
        });
        expect(results).toEqual(true);
      });
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

  it('doubles every item and skip holes', () => {
    const results = map([1, 2, , 3], ele => {
      return ele * 2;
    });
    expect(results).toEqual([2, 4, , 6]);
  });

  describe('filter', () => {
    it('remove even numbers from an array', () => {
      const results = filter([1, 2, 3, 4, 5], ele => {
        return ele % 2 !== 0;
      });
      expect(results).toEqual([1, 3, 5]);
    });
  });

  describe('indexOf', () => {
    it('returns first index greater than 2', () => {
      const results = indexOf([1, 2, 3, 4, 5], ele => {
        return ele > 2;
      });
      expect(results).toEqual(2);
    });
  });
  
});
