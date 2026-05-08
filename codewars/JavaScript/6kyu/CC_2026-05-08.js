/* Loneliest character

Complete the function which accepts a string and returns an array of character(s) that have the most spaces to their right and left.

Notes:
- the string can have leading/trailing spaces - you should not count them
- the strings contain only unique characters from a to z
- the order of characters in the returned array doesn't matter

Examples:
"a b  c"                        -->  ['b']
"a bcs           d k"           -->  ['d']
"    a b  sc     p     t   k"   -->  ['p']
"a  b  c  de"                   -->  ['b', 'c']
"     a  b  c de        "       -->  ['b']
"abc"                           -->  ['a', 'b', 'c']
*/

function loneliest(str) {
  const s = str.trim();
  const chIdx = [];
  let res = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      chIdx.push([s[i], i]);
    }
  }

  for (let i = 0; i < chIdx.length; i++) {
    const high = chIdx[i + 1] ? chIdx[i + 1][1] : chIdx[i][1] + 1;
    const low = chIdx[i - 1] ? chIdx[i - 1][1] : -1;
    const sum = high - low;
    if (sum > max) {
      max = sum;
      res = [chIdx[i][0]];
    } else if (max === sum) {
      res.push(chIdx[i][0]);
    }
  }

  return res;
}
