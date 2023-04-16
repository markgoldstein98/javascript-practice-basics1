// SOLUTION

// the approach is the same as the last problem, except
//  the loop goes backwards
// we will start the iteration with the last index of the string, 
// the condition to finish the loop will make the loop to run till the 0 index
// the increment is here really a decrement :)

function stringLastIndexOf(str, char) {

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}
