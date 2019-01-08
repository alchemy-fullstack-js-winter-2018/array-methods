const { 
    map, 
    filter, 
    findIndex, 
    reduce, 
    every


} = require('../lib/index');
describe('array methods', () => {
    describe('assumptions', () => {
        describe('map', () => {
            it('adds 2 for each value', () => {
                const addTwo = [1, 2, 3].map(ele => {
                    return ele + 2;
                });
                expect(addTwo).toEqual([3, 4, 5]);
            });
        });
        describe('filter', () => {
            it('returns a new array based on true/false', () => {
                const large = [1, 2, 4, 5].filter(ele => {
                    return ele >= 4;
                });
                expect(large).toEqual([4, 5]);
            });
        });
        describe('findIndex', () => {
            it('finds the index of a specific value', () => {
                const index = [1, 3, 5].findIndex(ele => {
                    return ele === 3;
                });
                expect(index).toEqual(1);
            });
        });

        describe('reduce', () => {
            it('sums an array to a single value', () => {
                const results = [1, 6, 5].reduce((acc, ele) => {
                    return acc + ele;
                });
                expect(results).toEqual(12);
            });
        });

        describe('every', () => {
            it('returns true if all values pass logic check', () => {
                const results  = [1, 2, 5].every(ele => {
                    return ele > 0;
                });
                expect(results).toBeTruthy();
            });
        });
    });



    describe('implementation', () => {
        describe('map', () => {
            it('can double all values', () => {
                const results = map([2, 4, 6], ele => {
                    return ele * 2; 
                });
                expect(results).toEqual([4, 8, 12]);
            });
        });
        describe('filter', () => {
            it('returns new array based on true/false', () => {
                const results = filter([-1, 3, 6, 8], ele => {
                    return ele >= 3;
                });
                expect(results).toEqual([3, 6, 8]);
            });
        });
        describe('findIndex', () => {
            it('returns the index of a specific value', () => {
                const results = findIndex([1, 3, 5], ele => {
                    return ele === 5;
                });
                expect(results).toEqual(2); 
            });
        });
        describe('reduce', () => {
            it('sums an array to a single value', () => {
                const results = reduce([2, 3, 5], (acc, ele) => {
                    return acc + ele;
                }, 0);
                expect(results).toEqual(10);
            });
        });
        describe('every', () => {
            it(' returns true/false for an array if every value passes logic check', () => {
                const results = every([1, 4, 7], ele => {
                    return ele > 0;
                });
                expect(results).toBeTruthy();
            });
        });

    });
});


