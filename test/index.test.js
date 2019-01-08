const { map, filter, findIndex, reduce, every } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('loops through the array', () => {
        const map = [1, 3, 5].map(ele => {
          return ele;
        });
        expect(map).toEqual([1, 3, 5]);
      });
    });
    
    describe('filter', () => {
      it('filters the array leaving only numbers greater than 2', () => {
        const filter = [1, 3, 5].filter(ele => {
          return ele > 2;
        });
        expect(filter).toEqual([3, 5]);
      });
    });
    describe('findIndex', () => {
      it('finds the index of a specific value in an array', () => {
        const findIndex = [1, 3, 5].findIndex(ele => {
          return ele === 5;
        });
        expect(findIndex).toEqual(2);
      });
    });
    describe('reduce', () => { 
      it('reduces the array to a single value', () => {
        const results = [1, 3, 5].reduce((acc, ele) => {
          return acc + ele;
        });
        expect(results).toEqual(9);
      });
    });
  });
  describe('every', () => {
    it('returns true if all numbers are greater than zero', () => {
      const results = [1, 3, 5].every(ele => {
        return ele > 0;
      });
      expect(results).toEqual(true);
    });
  });

  describe('implementation', () => {
    describe('map', () => {
      it('loops through the array', () => {
        const results = map([1, 3, 5], ele => {
          return ele;
        });
        expect(results).toEqual([1, 3, 5]);
      });
    });

    describe('filter', () => {
      it('filters the array leaving only numbers greater than 2', () => {
        const results = filter([1, 3, 5], ele => {
          return ele > 2;
        });
        expect(results).toEqual([3, 5]);
      });
    });

    describe('findIndex', () => {
      it('finds the index of a specific value in an array', () => {
        const results = findIndex([1, 3, 5], ele => {
          return ele === 5;
        });
        expect(results).toEqual(2);
      });
    });

    describe('reduce', () => { 
      it('reduces the array to a single value', () => {
        var acc = 0;
        const results = reduce([1, 3, 5], acc, ele => {
          return acc + ele;
        });
        expect(results).toEqual(9);
      });
    });

    describe('every', () => {
      it('returns true if all numbers are greater than zero', () => {
        const results = every([1, 3, 5], ele => {
          return ele > 0;
        });
        expect(results).toEqual(true);
      });
    });
  });
});
