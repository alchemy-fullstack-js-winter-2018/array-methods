const findIndex = (arr, fn) => {
  let index = undefined;
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i]) ?  index = i : null;
  }

  return index;
};

module.exports = findIndex;