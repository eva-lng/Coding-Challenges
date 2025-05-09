/* 349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

Constraints:
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number[]}
   */

  intersection1(nums1, nums2) {
    const res = [];
    const map = {};

    for (let n of nums1) {
      if (!map[n]) {
        map[n] = true;
      }
    }
    for (let n of nums2) {
      if (map[n]) {
        res.push(n);
        map[n] = false;
      }
    }
    return res;
  }

  intersection2(nums1, nums2) {
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);
    const res = [];

    for (let n of s1) {
      if (s2.has(n)) res.push(n);
    }
    return res;
  }
}
