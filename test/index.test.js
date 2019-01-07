const {
    map,
    filter,
    findIndex,
    reduce
} = require('../lib/index');

describe('array methods', () => {
    describe('assumptions', () => {
        describe('map', () => {
            it('will add 2 to each element in the array skipping holes', () => {
                const mapping = [1, 2, 3, 4, 5, 6].map(ele => {
                return ele + 2;
                });
                
                expect(mapping).toEqual([3, 4, 5, 6, 7, 8]);
            });
        });
        describe('filter', () => {
            it('will find all the elements that are even/true', () => {
                const filtering = [1, 2, 3, , 4, 5, 6].filter(ele => {
                    return ele % 2 === 0;
                });

                expect(filtering).toEqual([2, 4, 6]);
            });  
        });
        describe('findIndex', () => {
            it('will find the element an element and return the index', () => {
                const findIndexNum = [3, 3, 3, 4, 3, 3].findIndex(ele => {
                    return ele === 4;
                });

                expect(findIndexNum).toEqual(3);
            });
        });
        describe('reduce', () => {
            it('will add all elements in an array to find the sum', () => {
                const reducing = [2, 2, 2, 2, 2].reduce((acc, ele) => {
                    return acc + ele;
                });

                expect(reducing).toEqual(10);
            });
        }); 
    });
    describe('implimentation', () => {
        describe('map', () => {
            it('can double every item in an array skipping holes', () => {
                const results = map([2, 4, 6], ele => {
                    return ele * 2;
                });

                expect(results).toEqual([4, 8, 12]);  
            });
        });
        describe('filter', () => {
            it('can find all the numbers that are even', () => {
                const results = filter([1, 2, 3, , 4, 5, 6], ele => {
                    return ele % 2 === 0;  
                });

                expect(results).toEqual([2, 4, 6]);    
            });
        });
        describe('findIndex', () => {
            it('will find the first element equal to 4 and return the index', () => {
                const results = findIndex([3, 3, 3, 4, 3, 3], ele => {
                    return ele === 4;
                });

                expect(results).toEqual(3);
            });
        });
        describe('reduce', () => {
            it('will add all elements in an array to find the sum', () => {
                const results = reduce([2, 2, 2, 2, 2], (acc, ele) => {
                    return acc + ele;
                });

                expect(results).toEqual(10);
            });
        });
    });
});