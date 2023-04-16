//SOLUTION
// We sould loop trough the array and count each apparence of the received value as the second parameter
// Wee will need a counter and we will add 1 to it each time the current element is equal to the value of the val parameter
// at the end we return the count variable (will return the value of it) 

function countValues(arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      count++;
    }
  }
  return count;
}
