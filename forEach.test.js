const forEach = require('./forEach');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('forEach', () => {
      it('double the array [1, 2, 3, 4]', () => {
        const results = () => {
          let count = 0;
          forEach([1, 2, 3, 4], ele => {
            count += ele;
          });
          return count;
        };
        expect(results()).toEqual(10);
      });
    });
  });
});
