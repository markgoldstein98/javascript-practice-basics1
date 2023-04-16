//SOLUTIONS//

// string addition
// https://www.w3schools.com/js/js_operators.asp  see the part "Javascript string addition"

function prependToString(str1, str2) {
  return str2 + str1;
}

// solution with template literals:
// https://www.w3schools.com/js/js_string_templates.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

function appendToString(str1, str2){
  return `${str2} ${str1}`
}