/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */

  longestCommonPrefix1(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
      const s = strs[i];
      while (pref !== s.substring(0, prefLen)) {
        prefLen--;
        if (prefLen === 0) return "";
        pref = pref.substring(0, prefLen);
      }
    }
    return pref;
  }

  longestCommonPrefix2(strs) {
    const arr = strs.slice().sort();
    let res = "";

    for (let i = 0; i < arr[0].length; i++) {
      if (arr[0][i] === arr[arr.length - 1][i]) {
        res += arr[0][i];
      } else {
        break;
      }
    }
    return res;
  }
}
