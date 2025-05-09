/* 409. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */

  // hash map
  longestPalindrome1(s) {
    const charCount = {};
    let res = 0;

    for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] % 2 === 0) {
        res += 2;
      }
    }

    return res + (res < s.length ? 1 : 0);
  }

  // hash set
  longestPalindrome2(s) {
    const seen = new Set();
    let res = 0;

    for (const char of s) {
      if (seen.has(char)) {
        seen.delete(char);
        res += 2;
      } else {
        seen.add(char);
      }
    }

    return seen.size === 0 ? res : res + 1;
  }
}
