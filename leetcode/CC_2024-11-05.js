/* 238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  // prefix & suffix optimal
  productExceptSelf1(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
      res[i] = res[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
      res[i] *= suffix;
      suffix *= nums[i];
    }
    return res;
  }

  // prefix & suffix
  productExceptSelf2(nums) {
    const n = nums.length;
    const res = new Array(n);
    const pref = new Array(n);
    const suff = new Array(n);

    pref[0] = 1;
    suff[n - 1] = 1;
    for (let i = 1; i < n; i++) {
      pref[i] = nums[i - 1] * pref[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
      suff[i] = nums[i + 1] * suff[i + 1];
    }
    for (let i = 0; i < n; i++) {
      res[i] = pref[i] * suff[i];
    }
    return res;
  }

  // division
  productExceptSelf3(nums) {
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
        res[i] = nums[i] === 0 ? prod : 0;
      } else {
        res[i] = prod / nums[i];
      }
    }
    return res;
  }

  // brute force
  productExceptSelf4(nums) {
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
