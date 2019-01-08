function map(arr, fn) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === undefined) {
      continue;
    }
    if(arr.hasOwnProperty(i)) {
      mappedArr[i] = fn(arr[i]);
    }
    else {
      const element = arr[i];
      mappedArr.push(fn(element));
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

function reduce(arr, fn, acc) {
  if(acc === undefined) {
    acc = 0;
  }
  for(let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

module.exports = {
  map,
  filter,
  findIndex,
  reduce
};
