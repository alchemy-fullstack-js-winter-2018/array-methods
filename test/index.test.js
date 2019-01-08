const { 
    map, filter, reduce
} = require('../lib/index');

describe('array methods', () => {
    
    describe('assumptions', () => {
        describe('map', () => {
            it('doubles each item in an array', () => {
                const doubled = [2, 4, 6].map(el => {
                    return el * 2;
                });

                expect(doubled).toEqual([4, 8, 12]);
            });
        });

        describe('filter', () => {
            it('can filter out odd numbers', () => {
                const evens = [1, 2, 3, 4].filter(el => {
                    return el % 2 === 0;
                });
                expect(evens).toEqual([2, 4]);
            });
        });
        
        describe('reduce', () => {
            it('can sum an array of numbers together', () => {
                const sum = [1, 2, 3].reduce((acc, el) => {
                    return acc + el;
                });
                expect(sum).toEqual(6);
            });
        });
       
    
    
    
    });

        describe('implementation', () => {
            describe('map', () => {
                it('can double every item in the array', () => {
                    const results = map([2, 4, 6], el => {
                        return el * 2;
                    });

                    expect(results).toEqual([4, 8, 12]);
                });

                it('can double every item and skip holes', () => {
                    const arr = [2, 4, ,6];
                    const results = map(arr, el => el * 2);
                    expect(results).toEqual([4, 8, ,12]);
                });
            });


            describe('filter', () => {
                it('can filter out odd numbers', () => {
                    const evens = filter([1, 2, 3, 4], el => {
                        return el % 2 === 0;
                    });

                    expect(evens).toEqual([2, 4]);
                });
            });
            
            describe('reduce', () => {
                it('can sum an array of numbers together', () => {
                    const sum = reduce([1, 2, 3], (acc, el) => {
                        return acc + el;
                    }, 0);

                    expect(sum).toEqual(6);
                });
            });
    
        });
    });

    //use hasProperty for checking for holes
