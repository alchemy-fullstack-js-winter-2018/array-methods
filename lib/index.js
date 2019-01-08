function map(arr, fn) {
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
            mappedArr[i] = fn(arr[i]);
        }
    }
    return mappedArr;
}

module.exports = {
    map
};
// don't use arr[i] for findindex

