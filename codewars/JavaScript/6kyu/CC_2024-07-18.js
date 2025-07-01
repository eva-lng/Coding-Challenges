/* Write a function to sort a given string into alphabetical order

Write a function to sort a given string into alphabetical order. Upper case and lower case should be sorted together (upper case first) and other characters should be sorted to the end, numbers first in ascending order, followed by punctuation. Spaces should be ignored.

For example:
Input string:
The cat sat on the mat

Output:
aaaceehhmnosTtttt

Input string:
“Happy 21st Birthday!”

Output:
aaBdHhipprsttyy12!””

*/

function sort(str) {
  const letters = [];
  const nums = [];
  const chars = [];
  const s = str.split(' ').join('').split('\n').join('');
  
  for (let c of s) {
    if (c.toLowerCase() !== c.toUpperCase()) {
      letters.push(c);
    }
    else if (!isNaN(c)) {
      nums.push(c);
    }
    else {
      chars.push(c);
    }
  }
  
  letters.sort((a, b) => a.toLowerCase() !== b.toLowerCase() 
               ? a.localeCompare(b) 
               : a.charCodeAt(0) - b.charCodeAt(0));
  nums.sort();
  chars.sort();
  
  return letters.concat(nums).concat(chars).join('');
}