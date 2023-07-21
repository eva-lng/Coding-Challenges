/* Character with longest consecutive repetition

For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]
where l (or L) is the length of the repetition. 

If there are two or more characters with the same l return the first in order of appearance.

For empty string return:
["", 0]
*/

function longestRepetition(s) {
  let lastChar = '';
  let lastCount = 0;
  let result = [lastChar, lastCount];
    
  for (let c of s) {
    if (c === lastChar) {
      ++lastCount;
    } else {
      lastChar = c;
      lastCount = 1;
    }
    if (result[1] < lastCount) {
      result = [lastChar, lastCount];
    }
  }
  return result;
}