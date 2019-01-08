const { 
    map
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


           
        });
    });

    //use hasProperty for checking for holes
