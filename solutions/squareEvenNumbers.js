// SOLUTIONS

// in the sim variable we will hold the actual sum and will return its value at the end of the loop
// Loop trough the array and check if the numkber is even (using the % Modulus operator) https://www.w3schools.com/js/js_operators.asp
// if yes, add it's square value to the sum variable

function squareEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i] ** 2;
    }
  }
  return sum;
}
