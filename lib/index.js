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

//Ryan's alternative demo for reduce

// function reduce(arr, fn, initialValue) {
//   if(arr.length < 1) return initialValue; 
//   if(!initialValue) {
//     return reduce(tail(arr), fn, arr[0]);
//   }
//   let acc = initialValue;
//   for(let i; i < arr.length; i++) {
//     if(arr.hasOwnProperty(i)) acc = fn(acc, arr[i]);
//   }
//   return acc;
// }

// function tail(arr) {
//   let t = [];
//   for(let i = 1; i < arr.length; i++) {
//     if(arr.hasOwnProperty(i)) t[i] = arr[i];
//   }
//   return t;
// }



