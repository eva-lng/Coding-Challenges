/* 49. Group Anagrams

Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Example 2:
Input: strs = ["x"]
Output: [["x"]]

Example 3:
Input: strs = [""]
Output: [[""]]

Constraints:
1 <= strs.length <= 10^4.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters. */

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  // hash table
  groupAnagrams1(strs) {
    const res = {};

    for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
        count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
      }
      const key = count.join(",");
      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(s);
    }
    return Object.values(res);
  }

  // sorting
  groupAnagrams2(strs) {
    const res = {};

    for (let s of strs) {
      const sortedS = s.split("").sort().join("");
      if (!res[sortedS]) {
        res[sortedS] = [];
      }
      res[sortedS].push(s);
    }
    return Object.values(res);
  }
}
