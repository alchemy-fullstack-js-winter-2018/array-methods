function map(arr, fn) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      const element = arr[i];
      mappedArr.push(fn(element));
    } 
    else mappedArr.push(undefined); 
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
  return -1;
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
    if(!fn(arr[i])) {
      return false;
    }
  }
  return true;  
}

module.exports = {
  map,
  filter,
  findIndex,
  reduce,
  every
}
;
