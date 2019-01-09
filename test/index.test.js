const { 
    map, 
    filter, 
    reduce , 
    findIndex,
    every
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
        describe('findIndex', () => {
            it('can find the first large number', () => {
                const findFirstLargeNumber = [1, 2, 240, 480, 960].findIndex(el => {
                    return el > 200;
                });
                expect(findFirstLargeNumber).toEqual(2);
             });
        });
        describe('every', () => {
            it('can return true all values below a threshold', () => {
                const isBelowThreshold = [1, 2, 3, 4, 5].every(el =>{
                    return el < 6;
                });
                expect(isBelowThreshold).toEqual(true);
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
                it('can filter out odd numbers & skip holes', () => {
                    const evens = filter([1, , 2, 3, 4, , 5, 6], el => {
                        return el % 2 === 0;
                });
                expect(evens).toEqual([2, 4, 6]);
                });
            });
            
            describe('reduce', () => {
                it('can sum an array of numbers together', () => {
                    const sum = reduce([1, 2, 3], (acc, el) => {
                        return acc + el;
                    }, 0);

                    expect(sum).toEqual(6);
                });

                it('can sum an array with no accumulator', () => {
                    const sum = reduce([1, 2, 3], (acc, el) => {
                        return acc + el;
                    });

                    expect(sum).toEqual(6);
                });
                it('can sum an array of numbers together & skip holes', () => {
                    const sum = reduce([1, 2, , 3], (acc, el) => {
                        return acc + el;
                    }, 0);

                    expect(sum).toEqual(6);
                });
            });
            describe('findIndex', () => {
                it('has to be a greater number in the array', () => {
                    const results = findIndex([1, 2, 240, 480, 960], el => {
                        return el > 2;
                    });

                    expect(results).toEqual(2);
                });
            });
            describe('every', () => {
                it('can return true all values below a threshold', () => {
                    const results = every([1, 2, 3, 4, 5], el => {
                        return el < 6;
                    });
                    expect(results).toEqual(true);
                });
            });
            describe('forEach', () => {
                it('squares a number', () => {
                    let results = [];
                    forEach([1, 2, 3, 4], el => {
                        results.push(el * el);

                    })
                    expect(results).toEqual([1, 3, 4, 8, 16]);
                });
            });
        });
    });

    //use hasProperty for checking for holes
