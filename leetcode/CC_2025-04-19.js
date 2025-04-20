/* 1800. Maximum Ascending Subarray Sum

Given an array of positive integers nums, return the maximum possible sum of an strictly increasing subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

Example 1:
Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

Example 2:
Input: nums = [10,20,30,40,50]
Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.

Example 3:
Input: nums = [12,17,15,13,10,11,12]
Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

  // brute force
  maxAscendingSum1(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
      let sum = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] <= nums[j - 1]) {
          break;
        }
        sum += nums[j];
      }
      res = Math.max(res, sum);
    }
    return res;
  }

  // iteration
  maxAscendingSum2(nums) {
    let res = nums[0];
    let sum = nums[0];

    for (let i = i; i < nums.length; i++) {
      if (nums[i] <= nums[i - 1]) {
        sum = 0;
      }
      sum += nums[i];
      res = Math.max(res, sum);
    }
    return res;
  }
}
