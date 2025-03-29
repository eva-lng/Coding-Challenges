/* 1624. Largest Substring Between Two Equal Characters

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

Example 1:
Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.

Example 2:
Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".

Example 3:
Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.

Constraints:
1 <= s.length <= 300
s contains only lowercase English letters.
*/

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */

  maxLengthBetweenEqualCharacters1(s) {
    const chMap = {};
    let res = -1;

    for (let i = 0; i < s.length; i++) {
      if (!(s[i] in chMap)) {
        chMap[s[i]] = i;
      } else {
        res = Math.max(res, i - chMap[s[i]] - 1);
      }
    }
    return res;
  }

  maxLengthBetweenEqualCharacters2(s) {
    const arr1 = new Array(26).fill(-1);
    const arr2 = new Array(26).fill(-1);
    let res = -1;

    for (let i = 0; i < s.length; i++) {
      const curr = s.charCodeAt(i) - "a".charCodeAt(0);

      if (arr1[curr] === -1) {
        arr1[curr] = i;
      } else {
        arr2[curr] = i;
        res = Math.max(res, arr2[curr] - arr1[curr] - 1);
      }
    }
    return res;
  }

  maxLengthBetweenEqualCharacters3(s) {
    let res = -1;

    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if (s[i] === s[j]) {
          res = Math.max(res, j - i - 1);
        }
      }
    }
    return res;
  }
}
