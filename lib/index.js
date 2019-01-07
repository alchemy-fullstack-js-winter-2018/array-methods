function map(arr, fn) {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    mappedArray.push(fn(element));
  }
  return mappedArray;
}

function filter(arr, fn) {
  const filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn, arr[i] % 2 === 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

function findIndex(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      return arr[i];
    }
  }
}

module.exports = {
  map,
  filter,
  findIndex

};
