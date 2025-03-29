/* 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.
*/

class Solution {
  /**
   * Check if a character is alphanumeric
   * @param {char} char
   * @return {boolean}
   */
  isAlphanum(char) {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    );
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
    let str = "";
    for (let c of s) {
      if (this.isAlphanum(c)) {
        str += c.toLowerCase();
      }
    }
    return str === str.split("").reverse().join("");
  }
}
