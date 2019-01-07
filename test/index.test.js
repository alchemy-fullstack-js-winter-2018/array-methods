const { map } = require('../lib/index');
const { filter } = require('../lib/index'); 
const { findIndex } = require('../lib/index');
const { reduce } = require('../lib/index'); 
const { every } = require('../lib/index'); 

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('2 plus 2 equal', () => {
        const add = [1, 2, 3].map(ele => {
          return ele + 2; 
        });
        expect(add).toEqual([3, 4, 5]); 
      });
    });
    describe('filter', () => {
      it('there should only be numbers greater than 2', () => {
        const filter = [1, 3, 6].filter(ele => {
          return ele > 2;
        });
        expect(filter).toEqual([3, 6]); 
      });
    });
    describe('findIndex', () => {
      it('find only the number that equal 5', () => {
        const find = [1, 4, 5, 7].filter(ele => {
          return ele === 5; 
        });
        expect(find).toEqual([5]); 
      });
    });
    describe('reduce', () => {
      it('can sum numbers', () => {
        const sum = [1, 3, 4].reduce((accumulator, ele) => {
          return accumulator + ele;
        }, 0);
        expect(sum).toEqual(8);
      });
    });
    describe('implementation of map', () => {
      describe('map', () => {
        const result = map([2, 4, 6], ele => {
          return ele * 2;
        });
        expect(result).toEqual([4, 8, 12]); 
      });
    });
    describe('implementation of filter', () => {
      it('filter', () => {
        const filterResult = filter([2, 4, 6], ele => {
          if(ele > 2) 
            return ele;
        });
        expect(filterResult).toEqual([4, 6]); 
      });
    });

    describe('implementation of findIndex', () => {
      it('findIndex', () => {
        const indexResult = findIndex([2, 4, 6], ele => {
          if(ele === 6)
            return ele;
        });
        expect(indexResult).toEqual([6]);
      });
    });
    describe('implementation of reduce', () => {
      it('reduce', () => {
        const reduceResult = reduce([2, 4, 6], (acc, ele) => {
          return acc + ele;
        }, 0);
        expect(reduceResult).toEqual(12); 
      });
    });

    describe('implementation of every', () => {
      it('every', () => {
        const everyResult = every([2, 4, 6], ele => {
          if(ele > 1) 
            return ele;
        });
        expect(everyResult).toBe(true);
      });
    });
  });
});



