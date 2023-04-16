// SOLUTION

// SOLUTION1: regular method
// EXAMPLE: removeFromString('Elie', 2, 2) // 'El'
// PSEUDO SOLUTION
  // we will need a variable where we will fill our result in.
  // in a String "Elie" we will need to remove 2 characters strating after the second character
  // The idea is tp rebuild the string without the two characters we need to remove
  // we have to remove the characters from the index  thet is the value of the start parameter till the index that is the start+removeCount value
  // for this reason we will build our if condition like this:
  // add the current character if the index is less than the start number OR when the index is equal or biger then the start+removeCount (see the code)
//
function removeFromString(str, start, removeCount) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {

    if (i < start || i >= start + removeCount) {
      newStr += str[i];
    }
  }
  return newStr;
}

// SOLUTION2: converting to an array method
// We have an array method "splice" that does the exact same thing that the task asked us to do
// 
// So we can transform our string into an array first with the  "split" string method, with empty string as a separator
// https://www.w3schools.com/jsref/jsref_split.asp

// on the array we created like this we can use the splice array method
// https://www.w3schools.com/jsref/jsref_splice.asp

// after that we need to transform this array back to string using the "join" array method, with empty string as a separator
// https://www.w3schools.com/jsref/jsref_join.asp

// DIG FURTHER: See the available string methods https://www.w3schools.com/jsref/jsref_obj_string.asp

function removeFromString(str, start, removeCount) {
  let arr = str.split('');
  arr.splice(start, removeCount);
  return arr.join('');
}
