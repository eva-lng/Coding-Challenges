/* Is Palindrome

Given a string s, return true if it is a palindrome, otherwise return false.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:
Input: s = "Was it a car or a cat I saw?"
Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:
Input: s = "tab a cat"
Output: false
Explanation: "tabacat" is not a palindrome.

Constraints:
1 <= s.length <= 1000
s is made up of only printable ASCII characters
*/

class Solution {
  /**
   * Check if a character is alphanumeric
   * @param {char} char
   * @return {boolean}
   */
  isAlphanum(char) {
    return (char >= 'a' && char <= 'z') ||
           (char >= 'A' && char <= 'Z') ||
           (char >= '0' && char <= '9');
  }

  /**
   * @param {string} s
   * @return {boolean}
   */

  // two pointer
  isPalindrome1(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
      while (l < r && !this.isAlphanum(s[l])) {
        l++;
      }
      while (r > l && !this.isAlphanum(s[r])) {
        r--;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  // reverse string
  isPalindrome2(s) {
    let str = '';
    for (let c of s) {
      if (this.isAlphanum(c)) {
        str += c.toLowerCase();
      }
    }
    return str === str.split('').reverse().join('');
  }
}