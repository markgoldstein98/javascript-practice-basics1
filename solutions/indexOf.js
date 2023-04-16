// SOLUTIONS

// The task solution is equal as of the stringIndexOf.js task. See the explanation from it's solution
// Looping trough an array is the same mechanism as looping trough a string

function indexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
