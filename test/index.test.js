const { map } = require('../lib/index');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('map', () => {
      it('adds 3 to each number', () => {
        const plusThree = [1, 2, 3].map(ele => {
          return ele + 3;
        });
        expect(plusThree).toEqual([4, 5, 6]);
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
        
    })
  });
});
