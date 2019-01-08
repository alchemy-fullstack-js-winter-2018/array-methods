const { map } = require('../lib/index.js');

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
        it('can filter out odd numbers', () => {
            const evens = filter([1, 2, 3, 4], ele => {
                return ele %2 === 0;
            });

            expect(evens).toEqual([2, 4]);
        });
            

    });

    describe('findIndex', () => {
        it('can find index of item in array', () => {
            const findArray = [1, 2, 3, 4].findIndex(ele => {
                
                return ele === 2;
            });
            expect(findArray).toEqual([1]);
        });
    });

    describe('reduce', () => {
        it('can sum an array of numbers together', () => {
            const sum = reduce([1, 2, 3]), (acc, ele) => {
            return acc + ele;
        });
        expect(sum).toEqual(6);
    });

    describe('reduce', () => {
        it('can sum an array of numbers te an array', () => {
            const results = reduce([1, 2, 3], (a
                return accu + val;
            })
            expect(find).toEqual([14])
        })
    })
});