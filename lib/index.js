module.exports = {
  map,
  filter,
  findIndex,
  reduce,
  every
};
function map(arr, fn) {
  const mapArray = []; 
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i));
    mapArray.push(fn(arr[i]));
  }
  return mapArray;
}

function filter(arr, fn) {
  const filterArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 2) {
      filterArray.push(fn(arr[i]));
    }
  }
  return filterArray;
}

function findIndex(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) 
      return i; 
  }
  return -1;
}

function reduce(arr, fn, initValue) {
  let acc = initValue; 
  for(let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    acc = fn(acc, ele); 
  }
  return acc;
}

function every(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 1) {
      return true;
    }
  }
  return false;
}

