function map(arr, fn) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    mappedArr.push(fn(arr[i]));
  }
  return mappedArr;
}

function filter(arr, fn) {
  const filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

function findIndex(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      return i;
    }
  }
}

function reduce(arr, acc, fn) {
  for(let i = 0; i < arr.length; i++) {
    var value = acc += fn(arr[i]);
  }
  return value;
}

function every(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
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
