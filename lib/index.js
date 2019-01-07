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

module.exports = {
  map,
  filter
};
