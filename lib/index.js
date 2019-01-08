function map(arr, fn) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      const element = arr[i];
      mappedArr.push(fn(element)); 
    }
    // or   
  }
  return mappedArr;
}

function filter(arr, fn) {
  const filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(fn(element)) {
      filteredArr.push(element);
    }
  }
  return filteredArr;
}

function reduce(arr) {
  var reducedArr = 0;
  for(let i = 0; i < arr.length; i++) {
    
    const element = arr[i];
    reducedArr += element;    
  }
  return reducedArr;
}

// function reduce(arr, fn, initialValue) {
//   let i = 0;
//   let acc = initialValue;
//   if(!acc) {
//     acc = arr[0];
//     i = 1;
//   }
//   for(i; i < arr.length; i++) {
//     acc = fn(acc, arr[i]);
//   }
// }

module.exports = {
  map,
  filter,
  reduce
};
