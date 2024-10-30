/* Is Anagram

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false

Constraints:
s and t consist of lowercase English letters.
*/

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram1(s, t) {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of t) {
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }

    return true;
  }

  isAnagram2(s, t) {
      return s.split('').sort().join('') === t.split('').sort().join('');
  }
}