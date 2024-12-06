/* Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  findDisappearedNumbers(nums) {
    const res = [];

    nums.forEach((n) => {
      const idxFromVal = Math.abs(n) - 1;
      if (nums[idxFromVal] > 0) {
        nums[idxFromVal] = nums[idxFromVal] * -1;
      }
    });

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        res.push(i + 1);
      }
    }

    return res;
  }
}
