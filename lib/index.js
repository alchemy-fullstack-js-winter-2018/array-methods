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
  for(let i = 0; i < arr.length; i ++) {
    const element = arr[i];
    if(fn(element)) {
      filteredArr.push(element);
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


function reduce(arr, fn, initialValue) {
  let i = 0;
  let acc = intialValue;
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
