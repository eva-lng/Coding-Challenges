/* Valid Palindrome II

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false
 
Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
*/

class Solution {
  /**
   * @param {string} str
   * @return {boolean}
   */

  // two pointer
  validPalindrome(str) {
    let low = 0;
    let high = str.length - 1;

    while (low < high) {
      if (str[low] !== str[high]) {
        return this.isPalindrome(str, low + 1, high) || this.isPalindrome(str, low, high - 1);
      }
      low++;
      high--;
    }
    return true;
  }

  isPalindrome(s, l, h) {
    while (l < h) {
      if (s[l] !== s[h]) return false;
      l++;
      h--;
    }
    return true;
  }
}