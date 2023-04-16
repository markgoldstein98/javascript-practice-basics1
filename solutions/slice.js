//SOLUTIONS

// This task is similar to the removeFromString.js. See the explanation of that tasks solution.
// The difference that we use the "push" array method to build the new array
// https://www.w3schools.com/jsref/jsref_push.asp

function slice(arr, start, end) {
  let newArr = [];
  // handle end not being passed or being too large
  if (end === undefined || end > arr.length) {
    end = arr.length;
  }
  // slice from start to end
  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
