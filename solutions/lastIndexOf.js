// SOLUTIONS

// The task solution is equal as of the stringLastIndexOf.js task. See the explanation from it's solution
// Looping trough an array is the same mechanism as looping trough a string

function lastIndexOf(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
