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

    describe('for each'... => {
      it(squared..) => {
        let results = []
        foreach{listarray here] => {
        square logic here}
    }
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

//example reduce
// dewcribe('reduce', () =>) {
//   it.only('can sum')
//     const sum= reduce([1, 2, 3]), (acc. ele) => {
//       retirn acc + ele;
//     }, 0);
//     expect(sum).toEqual(6);
// });
