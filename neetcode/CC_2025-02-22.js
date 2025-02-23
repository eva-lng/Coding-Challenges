/* Find All Anagrams in a String

Given two strings s and p, return an array of all the start indices of p's 
anagrams in s. You may return the answer in any order.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

Constraints:
1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
*/

class Solution {
  /**
   * @param {string} s
   * @param {string} p
   * @return {number[]}
   */

  // sliding window
  findAnagrams(s, p) {
    const sCount = Array(26).fill(0);
    const pCount = Array(26).fill(0);
    const res = [];

    for (const ch of p) {
      pCount[ch.charCodeAt(0) - 97]++;
    }

    let left = 0;
    let right = 0;

    while (right < s.length) {
      sCount[s[right].charCodeAt(0) - 97]++;
      if (right - left + 1 === p.length) {
        if (sCount.toString() === pCount.toString()) {
          res.push(left);
        }
        sCount[s[left].charCodeAt(0) - 97]--;
        left++;
      }
      right++;
    }

    return res;
  }
}
