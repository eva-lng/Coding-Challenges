/* Largest Number

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

Example 1:
Input: nums = [10,2]
Output: "210"

Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330"

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 109
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {string}
   */

  largestNumber(nums) {
    const arr = nums.map(String);
    const res = [];

    while (arr.length > 0) {
      let max = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] + arr[max] > arr[max] + arr[i]) {
          max = i;
        }
      }
      res.push(arr[max]);
      arr.splice(max, 1);
    }

    return res.join("")[0] === "0" ? "0" : res.join("");
  }
}
