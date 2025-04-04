/* 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 10^4
-231 <= nums[i] <= 2^31 - 1
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  moveZeroes(nums) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
      if (nums[r] !== 0) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
      }
    }
  }
}
