// SOLUTION

//examples:
// stringIncludes('awesome', 'e'); // 2
// stringIncludes('awesome', 'z'); // -1

// The solution is similar than the stringIncludes.js task
// The twist is, that when we find the character in the string, we return the index of that charachter in the string.
// In case when the character in not included, we will iterate the whole string, the if statement will never be trus, will never enter the block of the if and will never return the actual index. 
// So will finish the loop and continue in the 19. line where will return -1 as required in the task

function stringIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  // by the time you've reached this line, the loop has examined
  //   every single character in the string
  return -1;
}
