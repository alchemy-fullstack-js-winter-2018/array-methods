const reduce = (arr, fn) => {
  let total = arr[0];
  for(let i = 0; i < arr.length - 1; i++) {
    total = fn(total, arr[i + 1]);
  }

  return total;
};

module.exports = reduce;
