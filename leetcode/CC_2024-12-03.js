/* 387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0
Explanation: The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
1 <= s.length <= 10^5
s consists of only lowercase English letters.
*/

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  firstUniqChar1(s) {
    const charCount = {};

    for (const ch of s) {
      charCount[ch] = (charCount[ch] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (charCount[ch] === 1) return i;
    }

    return -1;
  }

  firstUniqChar2(s) {
    if (!s) return -1;

    const freq = new Array(26).fill(0);

    for (const ch of s) {
      freq[ch.charCodeAt() - "a".charCodeAt()]++;
    }

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (freq[ch.charCodeAt() - "a".charCodeAt()] === 1) {
        return i;
      }
    }

    return -1;
  }
}
