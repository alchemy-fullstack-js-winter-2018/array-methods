function map(arr, fn) {
  const mappedA = [];
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    mappedA.push(fn(element));
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
    if(fn(element)) return i;
  }
}

module.exports = {
  map,
  filter,
  findIndex
};
