//SOLUTIONS

// We will use here the iterator variable i as a value to multiple by and not as an index...
// The result will be an array and lets create a variable arr as an empty array
// The idea is to loop n times beginning with 1 and multiple the number x with the actual number of the iterator
// Add teh result at the end of the array (using the push array method) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

function multiples(x, n) {
  const arr = [];
  // multiply x * i for every number from 1 up to and including n
  for (let i = 1; i <= n; i++) {
    arr.push(i * x);
  }
  return arr;
}
