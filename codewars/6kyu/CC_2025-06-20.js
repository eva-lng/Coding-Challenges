/* Longest alphabetical substring

Find the longest substring in alphabetical order.
Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.
The input will only consist of lowercase characters and will be at least one letter long.
If there are multiple solutions, return the one that appears first.
*/

function longest(str) {
  let res = str[0];
  let subStr = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) >= str.charCodeAt(i - 1)) {
      subStr += str[i];
    } else {
      subStr = str[i];
    }
    res = subStr.length > res.length ? subStr : res;
  }
  return res;
}
