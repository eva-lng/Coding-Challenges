/* First non-repeating character

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("").
*/

// solution 1
function firstNonRepeatingLetter1(s) {
  const str = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (word.indexOf(str[i]) === str.lastIndexOf(word[i])) {
      return s[i];
    }
  }
  return '';
}

// solution 2
function firstNonRepeatingLetter2(s) {
  const str = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (str.split(str[i]).length === 2) {
      return s[i];
    }
  }
  return '';
}

// solution 3
function firstNonRepeatingLetter3(s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char.toLowerCase()] === 1) {
      return char;
    }
  }
  return '';
}