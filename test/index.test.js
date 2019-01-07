const { map, filter, findIndex } = require ('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('doubles each item in an array', () => {
        const double = [1, 2, 3].map(ele => {
          return ele * 2;
        });
        expect(double).toEqual([2, 4, 6]);
      });
    
      // it('can double every item and skip holes', () => {
      //   const arr = [2, 4, , 6];
      //   const results = map(arr, ele => ele * 2);
      //   expect(results).toEqual([4, 8, , 12])
      // });
      
    }); 
    describe('filter', () => {
      it('can return only even numbers from an array', () => {
        const evens = [1, 2, 3, 4, 5].filter(el => {
          return el % 2 === 0;
        });
        expect(evens).toEqual([2, 4]);
      });
    }); 
    describe('findIndex', () => {
      it('can find index of an element that satisfies the given condition', () => {
        const firstIndex = [1, 2, 3, 4, 5].findIndex (ele => {
          return ele > 3; 
        });
        expect(firstIndex).toEqual(3);
      });
    })
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
      it('can return even items in an array', () => {
        const evens = filter([1, 2, 3, 4, 5], ele => {
          return ele % 2 === 0;
        });
        expect(evens).toEqual([2, 4]);
      });
    });
    describe('findIndex', () => {
      it('can find index of an element that satisfies the given condition', () => {
        const firstIndex = findIndex([1, 2, 3, 4, 5], ele => {
          return ele > 3; 
        });
        expect(firstIndex).toEqual(3);
      });
    });

  });
});
