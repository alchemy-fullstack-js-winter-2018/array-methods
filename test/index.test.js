const { map, filter, findIndex, reduce, every } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('doubles each item in an array', () => {
        const doubled = [2, 4, 6].map(ele => {
          return ele * 2;
        });

        expect(doubled).toEqual([4, 8, 12]);
      });
     

      it('can double every item and skip holes', () => {
        const arr = [2, 4,, 6];
        const results = map(arr, ele => ele * 2);
        expect(results).toEqual([4, 8, , 12]);
      });
    });
  });
});

describe('filter', () => { 
  describe('assumptions', () => {
    describe('filter', () => {
      it('filters out odd numbers in an array', () => {
        const evens = [1, 2, 5, 8].filter(ele => {
          return ele % 2 === 0;
        });

        expect(evens).toEqual([2, 8]);
      });
    });
  });
});



describe('findIndex', () => { 
  describe('assumptions', () => {
    describe('findIndex', () => {
      it('returns the index of the first item whose callback returns true or a truthy value, -1 if no item is found', () => {
        const items = [1, 3, 4, 8].findIndex(ele => {
          return ele % 2 === 0;
        });

        expect(items).toEqual(2);
      });
    });
  });
});


describe('reduce', () => { 
  it('can sum an array of numbers together', () => {
    const sum = reduce([1, 2, 3], (acc, ele) => {
      return acc + ele;
    }, 0);

    expect(sum).toEqual(6);
  });

  it('can sum an array with no accumulator element', () => {
    const sum = reduce([1, 2, 3], (acc, ele) => {
      return acc + ele;
    });

    expect(sum).toEqual(6);
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
describe('every', () => { 

  it('can return true if all elements are greater than 0', () => {
    const positive = [1, 2, 6, 8, 10].every(x => {
      return x > 0;
    });
    expect(positive).toEqual(true);
  });
  it('can return false if any number is less than 0', () => {
    const positive = [-10, -5, 1, 5, 10].every(x => {
      return x > 0;
    });
    expect(positive).toEqual(false);
  });
});
