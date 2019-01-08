function map(arr, fn) {
    const mappedArr = [];
    for(let i =0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
           mappedArr[i] = fn(arr[i]); 
        }    
    }
    return mappedArr;
}

function filter(arr, fn) {
    const filteredArr = [];
    for(let i= 0; i < arr.length; i++) {
        if (fn(arr[i])) {
        filteredArr.push(arr[i]); 
        }
    }
    return filteredArr;
}

function findIndex(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return (i);
        }
    }
}

function reduce(arr, fn, initialValue) {
    let i = 0;
    let acc = initialValue;
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
        if (arr.hasOwnProperty(i)) {
            if (fn(arr[i]) === false) {
                break;
            } else {
                return true;
            }
        }
    }
}

function forEach(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
       return fn(arr[i]);
    };
};

module.exports = {
    map,
    filter,
    findIndex,
    reduce,
    every,
    forEach
};
