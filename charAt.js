// add whatever parameters you deem necessary - good luck!
function charAt(str, index){
  if(index > str.length) {
    return ''
  } else {
    return str[index]
  }
}
// one-line solution using a ternary operator (condensed if/else)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function charAt(str, idx) {
  return idx < str.length ? str[idx] : '';
}