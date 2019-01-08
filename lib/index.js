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

function findIndex(arr, fn) {
  
  for(let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if(fn(ele)) return i;
  } 
}
//add -1: else { ...return -1;

function forEach(arr, ele) {
  for loop...
    if has own prop(i) fn(arr[i]
}

module.exports = {
  map,
  filter,
  reduce,
  findIndex
};

//reduce example
// funxction reduce(arr, fn, initialValue) {
//   if(ar.length < 1) return initialValue;
//   if(!initialValue) {
//     return reduce(arr -1 element, fc, arr[0]);
//or return reduce(tail(arr), fn, arr[0]);
//   }


// }
// let acc = initialValue;
// for(let i=0; i<arr.ltngth... {
//   if (arr.hasOwnOroperty()i)) acc = fn(acc, arr{i)})
// })
