//SOLUTIONS

// The solution is similar to max.js. See the explanation in it.
// Excet thet we will suppose that the first element of the array is the lowest and will chech if we can find some value in the arraz that is smaller than that

function min(arr) {
  let lowest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return lowest;
}
