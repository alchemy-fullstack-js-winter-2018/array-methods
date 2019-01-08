const findIndex = require('./findIndex');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('findIndex', () => {
      it('findIndex where element is 9', () => {
        const results = findIndex([1, 2, 9, 4], ele => ele === 9);
        expect(results).toEqual(2);
      });
    });
  });
});
