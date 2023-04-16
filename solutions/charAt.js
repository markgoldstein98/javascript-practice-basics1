//SOLUTIONS//

// solution with if/else
function charAt(str, idx) {
  if(idx < str.length) {
    return str[idx]
  } else {
    return ''
  }
}

//
// one-line solution using a ternary operator (condensed if/else)
// https://www.w3schools.com/jsref/jsref_operators.asp
function charAt(str, idx) {
  return idx < str.length ? str[idx] : '';
}