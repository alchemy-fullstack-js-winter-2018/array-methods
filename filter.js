const filter = (arr, fn) => {
  let filtered = [];
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i]) ? filtered.push(arr[i]) : null;
  }

  return filtered;
};

module.exports = filter;
