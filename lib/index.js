function map(arr, fn) {
    const mappedArr = [];
    for(let i = 0; i < arr.length; i++) {
        mappedArr.push(fn(arr[i]));
    }

    return mappedArr;
}

function filter(arr, fn) {
    const filterArr = [];
    for(var i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(fn(element)) {
            filterArr.push(arr[i]);
        }
    }
}

function findIndex(arr, fn) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === fn) return i;
    }
    return -1;
}

// function reduce(array, fn, init) {
//     let accum;
//     if(init === undefined){
//         accum = array [0];
//     } else accum = init;
//     for (let i = 0; i < array.length; i++) {
//         if(init === undefined && i ===0) {
//             i = 1;
//         }
//         accum = callback(accum, array[i], i);
//     }
//     return accum;
// }

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

module.exports = {
    map,
    filter,
    findIndex
};