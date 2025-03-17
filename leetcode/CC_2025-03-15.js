/* Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*/

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */

  // brute force
  containsNearbyDuplicate1(nums, k) {
    for (let l = 0; l < nums.length; l++) {
      for (let r = l + 1; r < Math.min(nums.length, l + k + 1); r++) {
        if (nums[l] === nums[r]) return true;
      }
    }
    return false;
  }

  // hash map
  containsNearbyDuplicate2(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
        return true;
      }
      map.set(nums[i], i);
    }

    return false;
  }

  // hash set
  containsNearbyDuplicate3(nums, k) {
    let window = new Set();
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
      if (r - l > k) {
        window.delete(nums[l]);
        l++;
      }
      if (window.has(nums[r])) {
        return true;
      }
      window.add(nums[r]);
    }
    return true;
  }
}
