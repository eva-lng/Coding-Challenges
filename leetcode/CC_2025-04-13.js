/*
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  check(nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        count++;
      }
    }
    if (count > 1 || (count === 1 && nums[0] < nums.slice(-1))) {
      return false;
    }
    return true;
  }
}
