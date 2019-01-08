const { 
    map, 
    filter, 
    findIndex, 
    reduce, 
    forEach, 
    every} = require('../lib/index.js');

// describe('array methods', ()=>{
//     describe('assumptions')
// })

describe('implementation', () => {
    describe('map', () => {
        it('can double every item in an array', () => {
            const results = map([2, 4, , 6], ele => {
                return ele * 2; 
            })
            expect(results).toEqual([4, 8, , 12]);
        })
    })
})

describe('filter implementation', () => {
    describe('filter', () => {
        it('return numbers greater than 3', () => {
            const results = filter([2, 4, 6], ele => {
                return ele > 3;

            })
            expect(results).toEqual([4, 6]);
        })
    })
})

describe('findIndex implementation', () => {
    describe('findIndex', () => {
        it('return index of 4', () => {
            const results = findIndex([2, 4, 6], ele => {
                return ele === 4;
            })
            expect(results).toEqual(1);
        })
    })
})

describe('reduce implementation', () => {
    describe('reduce', () => {
        it('return the total within the array', () => {
            const results = reduce([2, 4, 6], (acc, ele) => {
                return acc + ele;
            }, 0);
            expect(results).toEqual(12);
        })
    })
})

describe('forEach implementation', () => {
    describe('forEach', () => {
        it('return all numbers > than 3', () => {
            const result = forEach([1, 3, 5, 4], ele => {
                return ele > 3;
            })
            expect(result).toEqual([5, 4]);
        })
    })
})

describe ('every implementation', () => {
    describe('every', () => {
        it('return true if all numbers are greater than 1', () => {
            const result = every([2, 4, 5], (ele) =>{
                return ele > 1; 
            })
            expect(result).toEqual([2, 4, 5]);
        })
    })
})

