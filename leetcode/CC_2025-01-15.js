/* 205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation: 
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 10^4
t.length == s.length
s and t consist of any valid ascii character. 
*/

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */

  isIsomorphic1(s, t) {
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
      const sc = s[i];
      const tc = t[i];

      if (charMap[sc]) {
        if (charMap[sc] !== tc) {
          return false;
        }
      } else if (Object.values(charMap).includes(tc)) {
        return false;
      }

      charMap[sc] = tc;
    }

    return true;
  }

  isIsomorphic2(s, t) {
    const charIndexS = {};
    const charIndexT = {};

    for (let i = 0; i < s.length; i++) {
      if (!(s[i] in charIndexS)) {
        charIndexS[s[i]] = i;
      }
      if (!(t[i] in charIndexT)) {
        charIndexT[t[i]] = i;
      }
      if (charIndexS[s[i]] !== charIndexT[t[i]]) {
        return false;
      }
    }

    return true;
  }
}
