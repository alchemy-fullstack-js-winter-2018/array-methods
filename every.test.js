const every = require('./every');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('every', () => {
      it('if every element is a multiple of 9', () => {
        const results = every([9, 81, 27, 4], ele => ele % 9 === 0);
        expect(results).toEqual(false);
      });

      it('if every element is a multiple of 9', () => {
        const results = every([9, 81, 27, 36], ele => ele % 9 === 0);
        expect(results).toEqual(true);
      });
    });
  });
});
