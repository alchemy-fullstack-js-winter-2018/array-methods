const { 
  map, 
  filter, 
  findIndex, 
  reduce 
} = require('../index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('double each number in an array', () => {
        const doubled = [2, 4, 6].map(ele => {
          return ele * 2;
        });
        expect(doubled).toEqual([4, 8, 12]);
      });
    });

    describe('filter', () => {
      it('return numbers greater than five', () => {
        const results = [3, 4, 5, 6, 7].filter(ele => {
          return ele > 5;
        });
        expect(results).toEqual([6, 7]);
      });
    });

    describe('findIndex', () => {
      it('find the largest number in an array', () => {
        const largest = [2, 4, 5, 10, 8].findIndex(ele => {
          return ele > 5;
        });
        expect(largest).toEqual(3);
      });
    });
    
    describe('reduce', () => {
      it('return the sum of all elements in an array', () => {
        const sum = [1, 2, 3].reduce((acc, ele) => {
          return acc + ele;
        });
        expect(sum).toEqual(6);
      });
    });
  });
});


describe('implementation', () => {
  describe('map', () => {
    it('double each number in an array', () => {
      const doubled = map([2, 4, 6], ele => {
        return ele * 2;
      });
      expect(doubled).toEqual([4, 8, 12]);
    });
  });

  describe('filter', () => {
    it('return numbers greater than five', () => {
      const results = filter([3, 4, 5, 6, 7], ele => {
        return ele > 5;
      });
      expect(results).toEqual([6, 7]);
    });
  });

  describe('findIndex', () => {
    it('find the largest number in an array', () => {
      const largest = findIndex([2, 4, 5, 10, 8], ele => {
        return ele > 5;
      });
      expect(largest).toEqual(3);
    });
  });

  describe('reduce', () => {
    it('return the sum of all elements in an array', () => {
      const sum = reduce([1, 2, 3], (acc, ele) => {
        return acc + ele;
      });
      expect(sum).toEqual(6);
    });
  });
});
