const { 
  map,
  filter,
  findIndex,
  reduce,
  every,
  forEach
} = require('../lib/index');

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
    });

    describe('filter', () => {
      it('filters out elements less than 5 from an array', () => {
        const numbers = [1, 7, 4, 2, 9, 3, 7];
        const small = numbers.filter(n => n < 5);
        expect(small).toEqual([1, 4, 2, 3]);
      });
      it('filters and skips holes', () => {
        // eslint-disable-next-line no-sparse-arrays
        const numbers = [, 7, 4, 2, , 3, , 7];
        const small = numbers.filter(n => n < 5);
        expect(small).toEqual([4, 2, 3]);
      });
    });

    describe('findIndex', () => {
      it('can find the index # from an array based on element value', () => {
        const nums = [2, 4, 6, 0, 67];
        const index = nums.findIndex(ele => ele === 67);
        expect(index).toEqual(4);
      });
      it('returns -1 if element value is NOT in array', () => {
        const arr = [2, 4, 6, 0, 67];
        const index = arr.findIndex(ele => {
          return ele === 45;
        });
        expect(index).toEqual(-1);
      });
      it('can find index # from array with holes based on element value', () => {
        // eslint-disable-next-line no-sparse-arrays
        const arr = [, , , 4, 6, , 67, , 81];
        const index = arr.findIndex(ele => ele === 67);
        expect(index).toEqual(6);
      });
    });

    describe('reduce', () => {
      it('can sum array numbers together', () => {
        const arr = [1, 2, 3];
        const sum = arr.reduce((acc, ele) => {
          return acc + ele;
        }, 0);
        expect(sum).toEqual(6);
      });
      it('can sum two numbers together in array with holes', () => {
        // eslint-disable-next-line no-sparse-arrays
        const arrHoles = [1, , 3];
        const sum = arrHoles.reduce((acc, ele) => {
          return acc + ele;
        }, 0);
        expect(sum).toEqual(4);
      });
      it('can sum array with no accumulator', () => {
        const arr = [1, 2, 3];
        const sum = arr.reduce((acc, ele) => {
          return acc + ele;
        });
        expect(sum).toEqual(6);
      });
    });

    describe('every', () => {
      it('returns true when all elements in array pass test', () => {
        const arr = [1, 20, 30];
        const res = arr.every(ele => ele > 0);
        expect(res).toEqual(true);
      });
      it('returns false when all elements in array do NOT pass test', () => {
        const arr = [1, 20, 30, -1, -30];
        const res = arr.every(ele => ele > 0);
        expect(res).toEqual(false);
      });
      it('returns false when all elements in array with holes do NOT pass test', () => {
        // eslint-disable-next-line no-sparse-arrays
        const arr = [1, 20, 30, , -30];
        const res = arr.every(ele => ele > 0);
        expect(res).toEqual(false);
      });
    });

    describe('forEach', () => {
      it('can square each item in an array', () => {
        const numbers = [1, 2, 3];
        const squared = [];
        numbers.forEach(x => {
          squared.push(x * x);
        });
        expect(squared).toEqual([1, 4, 9]);
      });
      it('can square each item in an array with holes', () => {
        // eslint-disable-next-line no-sparse-arrays
        const numbers = [1, 2, , 3];
        const squared = [];
        numbers.forEach(x => {
          squared.push(x * x);
        });
        expect(squared).toEqual([1, 4, 9]);
      });
      it('can return undefined', () => {
        // eslint-disable-next-line no-sparse-arrays
        const numbers = [1, , undefined, , 3];
        numbers.forEach(ele => ele);
        expect(numbers).toContain(undefined);
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
      it('can double every item AND skip hole', () => {
        // eslint-disable-next-line no-sparse-arrays
        const arr = [2, 4, , 6];
        const results = map(arr, ele => ele * 2);
        // eslint-disable-next-line no-sparse-arrays
        expect(results).toEqual([4, 8, , 12]);
        expect(results.length).toEqual(4);
      });
    });

    describe('filter', () => {
      it('can filter elements less than 5 from an array', () => {
        const small = filter([1, 7, 4, 2, 9, 3, 7], ele => {
          return ele < 5;
        });
        expect(small).toEqual([1, 4, 2, 3]);
      });
      it('filters and skips holes', () => {
        // eslint-disable-next-line no-sparse-arrays
        const numbers = [, 7, 4, 2, 9, 3, 7];
        const small = filter(numbers, n => n < 5);
        expect(small).toEqual([4, 2, 3]);
      });
    });

    describe('findIndex', () => {
      it('can find the index # from an array based on element value', () => {
        const index = findIndex([2, 4, 6, 0, 67], ele => {
          return ele === 67;
        });
        expect(index).toEqual(4);
      });
      it('returns -1 if element value is NOT in array', () => {
        const index = findIndex([2, 4, 6, 0, 67], ele => {
          return ele === 45;
        });
        expect(index).toEqual(-1);
      });
      it('can find index # from array with holes based on element value', () => {
        // eslint-disable-next-line no-sparse-arrays
        const index = findIndex([, , , 4, 6, , 67, , 81], ele => {
          return ele === 67;
        });
        expect(index).toEqual(6);
      });
    });

    describe('reduce', () => {
      it('can sum two numbers together', () => {
        const sum = reduce([1, 2, 3], (acc, ele) => {
          return acc + ele;
        }, 0);
        expect(sum).toEqual(6);
      });
      it('can sum two numbers together in array with holes', () => {
        // eslint-disable-next-line no-sparse-arrays
        const sum = reduce([1, , 3], (acc, ele) => {
          return acc + ele;
        }, 0);
        expect(sum).toEqual(4);
      });
      it('can sum array with no accumulator', () => {
        const sum = reduce([1, 2, 3], (acc, ele) => {
          return acc + ele;
        });
        expect(sum).toEqual(6);
      });
    });

    describe('every', () => {
      it('returns true when all elements in array pass test', () => {
        const arr = [1, 20, 30, 10];
        const res = every(arr, ele => ele > 0);
        expect(res).toEqual(true);
      });
      it('returns false when all elements in array do NOT pass test', () => {
        const arr = [1, 20, 30, -1, -30, -50];
        const res = every(arr, ele => ele > 0);
        expect(res).toEqual(false);
      });
      it('returns false when all elements in array with holes do NOT pass test', () => {
        // eslint-disable-next-line no-sparse-arrays
        const arr = [1, 20, 30, , -30, , -900];
        const res = every(arr, ele => ele > 0);
        expect(res).toEqual(false);
      });
    });

    describe('forEach', () => {
      it('can square each item in an array', () => {
        const numbers = [1, 2, 3];
        const squared = [];
        forEach(numbers, x => {
          squared.push(x * x);
        });
        expect(squared).toEqual([1, 4, 9]);
      });
      it('can square each item in an array with holes', () => {
        // eslint-disable-next-line no-sparse-arrays
        const numbers = [1, , 2, , 3];
        const squared = [];
        forEach(numbers, x => {
          squared.push(x * x);
        });
        expect(squared).toEqual([1, 4, 9]);
      });
      it('can return undefined', () => {
        // eslint-disable-next-line no-sparse-arrays
        const numbers = [1, , 2, undefined, 3];
        const undef = forEach(numbers, x => {
          return x;
        });
        expect(undef).toEqual(undefined);
      });
    });
  });
});
