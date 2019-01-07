function map(arr, fn) {
    const mappedArr = [];
    for(let i = 0; i < arr.length; i++) {
        mappedArr.push(fn(element));     
    };
    return mappedArr;
};
module.exports = {
    map
};