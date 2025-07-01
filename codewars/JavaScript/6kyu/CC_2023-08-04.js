/* Alphabet Slices

Given a string of lowercase letters, find substrings that consist of consecutive letters of the lowercase English alphabet and return a similar string, but with these substrings in reversed alphabetical order.

Examples:
("xabc")=> "xcba"

xa is not found in the alphabet, but abc is found, so it is reversed.

("pqrsxdef")=> "srqpxfed"
("jklxyz")=> "lkjzyx"
("vwxcdefg")=> "xwvgfedc"
("vvmnozzstubb")=> "vvonmzzutsbb"

Note: if there are no alphabet substrings in the input string, return the input string as is.

All inputs will consist of one or more lowercase letters. This kata uses only lowercase strings.
*/

function solution(str){
  let substrings = [];
  let newStr = '';
    
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str.charCodeAt(i) === str.charCodeAt(i - 1) + 1) {
      newStr += str[i];
    } else {
      substrings.push(newStr);
      newStr = str[i];
    }
  }
    
  substrings.push(newStr);
    
  return substrings.map(el => el.length > 1 ? el.split('').reverse().join('') : el).join('');
}