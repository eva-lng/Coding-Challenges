/* 1685. Sum of Absolute Differences in a Sorted Array

You are given an integer array nums sorted in non-decreasing order.

Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.

In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed).

Example 1:
Input: nums = [2,3,5]
Output: [4,3,5]
Explanation: Assuming the arrays are 0-indexed, then
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.

Example 2:
Input: nums = [1,4,6,8,10]
Output: [24,15,13,15,21]
 

Constraints:
2 <= nums.length <= 10^5
1 <= nums[i] <= nums[i + 1] <= 10^4
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  // brute force
  getSumAbsoluteDifferences1(nums) {
    const res = n;

    for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = 0; j < nums.length; j++) {
        sum += Math.abs(nums[i] - nums[j]);
      }
      res.push(sum);
    }
    return res;
  }

  // prefix & suffix sums (extra space)
  getSumAbsoluteDifferences2(nums) {
    const n = nums.length;
    const prefixSum = Array(n).fill(0);
    const suffixSum = Array(n).fill(0);
    const res = Array(n).fill(0);

    prefixSum[0] = nums[0];
    for (let i = 1; i < n; i++) {
      prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    suffixSum[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      suffixSum[i] = suffixSum[i + 1] + nums[i];
    }

    for (let i = 0; i < n; i++) {
      const leftSum = i > 0 ? i * nums[i] - prefixSum[i - 1] : 0;
      const rightSum = i < n - 1 ? suffixSum[i + 1] - (n - i - 1) * nums[i] : 0;
      res[i] = leftSum + rightSum;
    }

    return res;
  }

  // prefix & suffix sums
  getSumAbsoluteDifferences3(nums) {
    const n = nums.length;
    const res = Array(n).fill(0);

    res[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      res[i] = res[i + 1] + nums[i];
    }

    let prefixSum = 0;
    for (let i = 0; i < n; i++) {
      const leftSum = i * nums[i] - prefixSum;
      const rightSum = i < n - 1 ? res[i + 1] - (n - i - 1) * nums[i] : 0;
      res[i] = leftSum + rightSum;
      prefixSum += nums[i];
    }

    return res;
  }

  // prefix & suffix sums (optimal)
  getSumAbsoluteDifferences(nums) {
    const n = nums.length;
    const res = Array(n).fill(0);

    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let prefixSum = 0;

    for (let i = 0; i < n; i++) {
      totalSum -= nums[i];
      const leftSum = i * nums[i] - prefixSum;
      const rightSum = totalSum - (n - i - 1) * nums[i];
      res[i] = leftSum + rightSum;
      prefixSum += nums[i];
    }

    return res;
  }
}
