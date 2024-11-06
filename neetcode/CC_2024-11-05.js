/* Products of Array Discluding Self

Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in O(n) time without using the division operation?

Example 1:
Input: nums = [1,2,4,6]
Output: [48,24,12,8]

Example 2:
Input: nums = [-1,0,1,2,3]
Output: [0,-6,0,0,0]

Constraints:
2 <= nums.length <= 1000
-20 <= nums[i] <= 20
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  
  // division
  productExceptSelf1(nums) {
    let prod = 1;
    let zeroCount = 0;
    for (let n of nums) {
      if (n !== 0) {
        prod *= n;
      } else {
        zeroCount++;
      }
    }

    if (zeroCount > 1) {
      return Array(n).fill(0);
    }

    const res = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
      if (zeroCount > 0) {
        res[i] = (nums[i] === 0) ? prod : 0;
      } else {
        res[i] = prod / nums[i];
      }
    }
    return res;
  }

  // brute force
  productExceptSelf2(nums) {
    const n = nums.length;
    const res = new Array(n);

    for (let i = 0; i < n; i++) {
      let prod = 1;
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          prod *= nums[j];
        }
      }
      res[i] = prod;
    }
    return res;
  }
}