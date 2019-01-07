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

function reduce(arr, fn, initial) {
  if(initial) {
    let acc = initial;
    for(let i = 0; i < arr.length; i++) {
      acc += arr[i];
    }
    return acc;
  }
  else {
    let acc = 0;
    for(let i = 0; i < arr.length; i++) {
      acc += arr[i];
    }
    return acc;
  }
}

module.exports = {
  map,
  filter,
  findIndex,
  reduce
};
