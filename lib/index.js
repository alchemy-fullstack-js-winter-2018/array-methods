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
    if(fn(arr[i]) === true) {
      filteredArr.push(arr[i]);
    } 
  }
  return filteredArr;
}

module.exports = {
  map,
  filter
};
