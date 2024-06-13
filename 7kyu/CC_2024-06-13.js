/* Most valuable character

n this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically lowest character.
All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
*/

function solve(str) {
  let max = -1;
  let char = '';
  
  str.split('')
    .map(el => str.lastIndexOf(el) - str.indexOf(el))
    .forEach((n, i) => {
      if (n > max || (n === max && str.charCodeAt(i) < char.charCodeAt(0))){
        max = n;
        char = str[i];
    }
  });
  return char;
}