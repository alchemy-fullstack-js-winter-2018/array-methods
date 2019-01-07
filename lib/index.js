module.exports = {
  map,
  filter,
  findIndex,
  reduce
};
function map(arr, fn) {
  const mapArray = []; 
  for(let i = 0; i < arr.length; i++) {
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
  const filterIndex = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 6) {
      filterIndex.push(fn(arr[i]));
    }
  }
  return filterIndex;
}

function reduce(arr, fn, initValue) {
  let acc = initValue; 
  for(let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    acc = fn(acc, ele); 
  }
  return acc;
}
