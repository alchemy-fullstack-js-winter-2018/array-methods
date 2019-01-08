const reduce = (arr, fn, initialVal) => {
  let total = initialVal || arr[0];
  for(let i = 0; i < arr.length - 1; i++) {
    total = fn(total, arr[i + 1]);
  }
  initialVal ? total = fn(total, arr[0]) : null;
  return total;
};

module.exports = reduce;
