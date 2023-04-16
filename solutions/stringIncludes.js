// SOLUTION

//examples:
// stringIncludes('awesome', 'e'); // true
// stringIncludes('awesome', 'z'); // false

// like arrays, string are iterable too
// let's iterate trough the string and with each iteration check if the current string is the charachter (received as the second argument 'char')
// if it's equal we return true (means the string includes the character)

// NOTE: the return will interrupt the iteration and quit the function
// EXPLORE AND UNDERSTAND: console.log inside the for loop what happens in the first example stringIncludes('awesome', 'e');
//  how many iterations we have?
// You can see your consol.logs in dev tools opening on the index.html (Run the index.html with the live server)

function stringIncludes(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
}