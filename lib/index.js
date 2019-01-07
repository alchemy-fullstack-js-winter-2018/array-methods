function map(arr, fn) {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i ++) {
    mappedArray.push(fn(arr[i]));
  }
  return mappedArray;
}






module.exports = {
  map
};
