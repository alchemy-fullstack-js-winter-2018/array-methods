function map(arr, fn) {
    const mapped = [];
    for(let i = 0; i < arr.length; i ++) {
        mapped.push(fn(arr[i]));
    } 
    return mapped;
}

function filter(arr, fn) {
    const filtered = [];
    for(let i = 0; i < arr.length; i ++) {
        if(fn(arr[i])) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

function findIndex(arr, fn) {
    for(let i = 0; i < arr.length; i ++) {
        if(fn(arr[i])) {
            return arr.indexOf(arr[i]);
        }
    }
}


function reduce(arr, fn, accV) {
    let i = 0; 
    let acc = accV;
    if(!acc) {
        acc = arr[0];
        i = 1;
    }
    for(i; i < arr.length; i ++) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}

function every(arr, fn) {
    for(let i = 0; i < arr.length; i ++) {
        if(fn(!arr[i])) {
            return false;
        }
        else {
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