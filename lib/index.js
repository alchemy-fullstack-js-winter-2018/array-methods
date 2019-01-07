function map(arr, fn) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      mappedArr[i] = fn(arr[i]);
    }
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

function reduce(arr, fn) {
  let total = arr[0];
  for(let i = 0; i < arr.length - 1; i++) {
    total = fn(total, arr[i + 1]);
  }
  return total;
}

function every(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i]) !== true) {
      return false;
    }
    return true;
  }
}


module.exports = {
  map,
  filter,
  findIndex,
  reduce,
  every
};
