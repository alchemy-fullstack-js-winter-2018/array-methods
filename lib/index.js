function map(arr, fn){
    const mappedArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.hasOwnProperty(i)) {
            mappedArr[i] = fn(arr[i]);
        }
    }
    return mappedArr;
}


function filter(arr, fn) {
    const filterArr =[];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        if(fn(element)){
        filterArr.push(element);
        }
    }
    return filterArr;
}


function findIndex(arr, fn) {
    for(let i = 0; i < arr.length; i++){
       const element = arr[i];
       if(fn(element)){
           return i;
       }
    }
}

function reduce(arr, fn, intitialValue){
    let acc = intitialValue;
    for(let i = 0; i <arr.length; i++){
        acc = fn(acc, arr[i]);

    }
    return acc;
}

function forEach(arr, fn){
    const forEachArr = [];
    for(var i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            forEachArr.push(arr[i]);
        }

    }
    return forEachArr;
}

function every(arr, fn){
    const everyArr = [];
    for(var i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            everyArr.push(arr[i]);
            
        }
    }
    return everyArr;
}




module.exports = {
    map,
    filter,
    findIndex,
    reduce,
    forEach,
    every
}

// function filter(arr, fn) {
//     const filterArr =[];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 3){
//         filterArr.push(fn(arr[i]));
//         }
//     }
//     return filterArr;
// }