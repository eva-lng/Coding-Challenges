/* String Encode and Decode

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
Please implement encode and decode

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Example 2:
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]

Constraints:
0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters
*/

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = '';
    for (let s of strs) {
      res += s.length + '#' + s;
    }
    return res;
  }

// '4#str'  i=2  j=5   length=3

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}

