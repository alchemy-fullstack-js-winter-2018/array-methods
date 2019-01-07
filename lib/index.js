function map(arr, fn) {
  const mappedA = [];
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    mappedA.push(fn(element));
  }
  return mappedA;
}

module.exports = {
  map
};
