/* Is Anagram


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