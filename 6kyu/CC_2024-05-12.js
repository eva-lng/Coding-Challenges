/* Longest palindrome

A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".
*/

function longestPalindrome(str) {
  const s = str.toLowerCase();
  const letters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let res = 0;
  const map = {};
  
  for (let char of s) {
    if (letters.includes(char)) {
      map[char] = (map[char] || 0) + 1;
    }
  }
  
  for (let c in map) {
    if (map[c] % 2 === 0) {
      res += map[c];
    } else {
      res += map[c] - 1;
      single = true;
    }
  }
  
  return single ? res + 1 : res;
}