const { map } = require('../lib/index');

describe('array methods', () => {
    describe('assumptions', () => {
        describe('map', () =>  {
            it('doubles each item in an array', () => {
                const doubled = [2, 4, 6].map(ele => {
                    return ele * 2;
                });
                expect(doubled).toEqual([4, 8, 12])
            });
        });
    });

    describe('implementation', () => {
        describe('map', () => {
            it('can double every item in an array', () => {
                const results = map([2, 4, 6]), ele => {
                    return ele * 2;
                };
                expect(results).toEqual([4, 8, 12]);
            };
        });
    });
}); 