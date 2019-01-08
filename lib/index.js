function map(arr, fn) {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      mappedArray[i] = fn(arr[i]);
    }
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
      return i;
    }
    else {
      return -1;
    }
  }
}

function reduce(arr, fn, initialValue) {
  let i = 0;
  let acc = initialValue;

  if(!acc) {
    acc = arr[0];
    i = 1;
  }
  for(i; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }

  return acc;
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
