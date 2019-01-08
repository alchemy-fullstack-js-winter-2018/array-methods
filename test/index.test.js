const { map,
        filter,
        findIndex,
        reduce } = require('../lib/index');

describe('implementation', () => {
    describe('map', () => {
        it('can double every item in an array', () => {
            const results = map([2, 4, 6], ele => {
                return ele * 2;
            });
            expect(results).toEqual([4, 8, 12]);
        });

        it('can double every item an skip holes', () => {
            const arr = [2, 4, 6];
            const results = map(arr, ele => ele * 2);
            expect(results).toEqual([4, 8, , 12]);
        });
        
    });

    describe('filter', () => {
        it('can filter out odd numbers', () => {
            const evens = filter([1, 2, 3, 4], ele => {
                return ele % 2 === 0;
            });

            expect(evens).toEqual([2, 4]);
        });
    });

    describe('findIndex', () => {
        it('can find index of item in array', () => {
            const findIndex = [1, 2, 3, 4].findIndex(ele => {
                
                return ele === 2;
            });
            expect(findIndex).toEqual(1);
        });
    });

    describe('reduce', () => {
        it('can sum an array of numbers together', () => {
            const sum = reduce([1, 2, 3], (acc, ele) => {
            return acc + ele;
        }, 0);
        expect(sum).toEqual(6);
        });
        it (' can sum an array with no accumulator', () => {
            const sum = reduce ([1, 2, 3], (acc, ele) => {
                return acc + ele;
            });
            expect(sum).toEqual(6);
        });
    });
});
