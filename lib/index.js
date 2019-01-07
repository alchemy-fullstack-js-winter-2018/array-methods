
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

module.exports = {
  map,
  filter
};