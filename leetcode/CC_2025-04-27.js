/* 2053. Kth Distinct String in an Array

A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

Example 1:
Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 

Example 2:
Input: arr = ["aaa","aa","a"], k = 1
Output: "aaa"
Explanation:
All strings in arr are distinct, so the 1st string "aaa" is returned.

Example 3:
Input: arr = ["a","b","a"], k = 3
Output: ""
Explanation:
The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".

Constraints:
1 <= k <= arr.length <= 1000
1 <= arr[i].length <= 5
arr[i] consists of lowercase English letters.
*/

class Solution {
  /**
   * @param {string[]} arr
   * @param {number} k
   * @return {string}
   */

  // brute force
  kthDistinct1(arr, k) {
    for (let i = 0; i < arr.lengthl; i++) {
      let unique = true;
      for (let j = 0; j < arr.length; j++) {
        if (i === j) continue;

        if (arr[i] === arr[j]) {
          unique = false;
          break;
        }
      }
      if (unique) {
        k--;
        if (k === 0) return arr[i];
      }
    }
    return "";
  }

  // hash map
  kthDistinct2(arr, k) {
    const count = {};

    for (const str of arr) {
      if (!(str in count)) {
        count[str] = 0;
      }
      count[str]++;
    }

    for (const str of arr) {
      if (count[str] === 1) {
        k--;
        if (k === 0) {
          return str;
        }
      }
    }

    return "";
  }

  // hash set
  kthDistinct3(arr, k) {
    const unique = new Set();
    const seen = new Set();

    for (const str of arr) {
      if (unique.has(str)) {
        unique.delete(str);
        seen.add(str);
      } else if (!seen.has(str)) {
        unique.add(str);
      }
    }

    for (const str of arr) {
      if (unique.has(str)) {
        k--;
        if (k === 0) {
          return str;
        }
      }
    }

    return "";
  }
}
