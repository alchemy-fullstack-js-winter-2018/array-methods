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
    const element = arr[i];
    if(fn(element))
      filteredArr.push(element);
  }
  return filteredArr;
}

function findIndex(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(fn(element))
      return i;
  }
}


module.exports = {
  map,
  filter,
  findIndex
};
