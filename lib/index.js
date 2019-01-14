function map(arr, fn) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      const element = arr[i];
      mappedArr.push(fn(element)); 
    }
  }
  return mappedArr;
}

function filter(arr, fn) {
  const filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(fn(element)) {
      filteredArr.push(element);
    }
  }
  return filteredArr;
}

function reduce(arr) {
  var reducedArr = 0;
  for(let i = 0; i < arr.length; i++) { 
    const element = arr[i];
    reducedArr += element;    
  }
  return reducedArr;
}

function findIndex(arr, fn) {  
  for(let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if(fn(ele)) return i;
  } 
}

function every(arr, fn) {
  const falsesArr = [];
  for(let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if(fn(ele) === true) {
      return true;
    } else {
      falsesArr.push('false');
    }
  }
  if(falsesArr.length > 0) {
    return false;
  } else {
    return true;
  }
}

//add -1: else { ...return -1;

// function forEach(arr, ele) {
//   for loop...
//     if has own prop(i) fn(arr[i]
// }

module.exports = {
  map,
  filter,
  reduce,
  findIndex, 
  every
};
