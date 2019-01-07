function map(arr, fn) {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i ++) {
    if(arr.hasOwnProperty(i)) {
      mappedArray[i] = (fn(arr[i]));
    }
  }
  return mappedArray;
}

function filter(arr, fn) {
  const filtered = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

function indexOf(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      return i;
    }
  }
}


module.exports = {
  map,
  filter,
  indexOf
};
