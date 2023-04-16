// SOLUTION

// It is a good practice when solving a problem, to examine the reasonable edge cases we can run into
// In our case would be an edge case if the number to repeat the string is 0 or a negative number
function repeat(str, num){
  if(num <= 0) {
    return ''
  }
  let newStr = ''
  for(let i = 0; i < num; i++){
    newStr = newStr + str

    // you can use this shorthand:
    // newStr += str

    // there is a concat() method zou can call on strings
    // https://www.w3schools.com/jsref/jsref_concat_string.asp
    // newStr = newStr.concat(str);
  }
  return newStr;
}