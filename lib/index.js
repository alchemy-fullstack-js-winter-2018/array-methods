function map(arr, fn) {
    const mappedArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr.hasOwnProperty(i)) {
            mappedArr[i] = fn(arr[i]);
        }
    }

    return mappedArr;
}

function filter(arr, fn) {
    const filterArr = [];
    for(let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(fn(element)) {
            filterArr.push(element);
        }
    }
    return filterArr;
}

function findIndex(arr, fn) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === fn) return i;
    }
    return -1;
}


function reduce(arr, fn, initalValue) {
    let i = 0;
    let acc = initalValue;
    if (!acc) {
        acc = arr[0];
        i = 1;
    }
    for (i; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}

function every(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(fn(element)) {
            return true;
    }
}
}
module.exports = {
    map,
    filter,
    findIndex,
    reduce,
    every
};