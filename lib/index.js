function map(arr, fn) {
  const mappedA = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) { // skip holes; only run if has prop
      mappedA[i] = fn(arr[i]);
    }
  }
  return mappedA;
}

function filter(arr, fn) {
  const filteredA = [];
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(fn(element)) filteredA.push(element);
  }
  return filteredA;
}

function findIndex(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(fn(element)) {
      return i;
    }
  }
  return -1;
}

function reduce(arr, fn, init) {
  let i = 0;
  let acc = init;
  if(!acc) {
    acc = arr[0];
    i = 1;
  }
  for(i; i < arr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue;
    acc = fn(acc, arr[i]);
  }
  return acc;
}

function every(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(!fn(element)) {
      return false;
    }
  }
  return true;
}

function forEach(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      fn(arr[i]);
    }
  }
  return undefined;
}

// function exists(arr, idx) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr.hasOwnProperty(idx)) {
//       return idx;
//     }
//   }
// }

module.exports = {
  map,
  filter,
  findIndex,
  reduce,
  every,
  forEach
};
