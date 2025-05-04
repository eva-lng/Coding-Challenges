/* 1684. Count the Number of Consistent Strings

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Example 3:
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

Constraints:
1 <= words.length <= 10^4
1 <= allowed.length <= 26
1 <= words[i].length <= 10
The characters in allowed are distinct.
words[i] and allowed contain only lowercase English letters.
*/

class Solution {
  /**
   * @param {string} allowed
   * @param {string[]} words
   * @return {number}
   */

  // brute force
  countConsistentStrings1(allowed, words) {
    let res = 0;

    for (const w of words) {
      let flag = 1;
      for (const c of w) {
        if (!allowed.includes(c)) {
          flag = 0;
          break;
        }
      }
      res += flag;
    }

    return res;
  }

  // hash set
  countConsistentStrings2(allowed, words) {
    const allowedSet = new Set(allowed);
    let res = words.length;

    for (const w of words) {
      for (const c of w) {
        if (!allowedSet.has(c)) {
          res--;
          break;
        }
      }
    }

    return res;
  }
}
