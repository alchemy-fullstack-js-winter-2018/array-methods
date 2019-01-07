const map = (arr, fn) => {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    arr.hasOwnProperty(i) ? mappedArr.push(fn(arr[i])) : null;
  }
  return mappedArr;
};

module.exports = map;
