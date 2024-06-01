/* Only Duplicates

Given a string, remove any characters that are unique from the string.

Example:
input: "abccdefee"
output: "cceee"
*/

// solution 1
function onlyDuplicates1(str) {
  return str.split('').filter(el => str.indexOf(el) !== str.lastIndexOf(el)).join('');
}

// solution 2
function onlyDuplicates2(str) {
  let result = '';
  for (const char of str) {
    if (str.split(char).length > 2) {
      result += char;
    }
  }
  return result;
}