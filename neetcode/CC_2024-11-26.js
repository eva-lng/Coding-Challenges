/* Majority Element

Given an array nums of size n, return the candidate element.
The candidate element is the element that appears more than ⌊n / 2⌋ times. You may assume that the candidate element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

  majorityElement1(nums) {
    if (nums.length === 1) return nums[0];

    let candidate;
    let count = 0;

    for (const num of nums) {
      if (count === 0) {
        candidate = num;
      }
      count += candidate === num ? 1 : -1;
    }

    return candidate;
  }

  majorityElement2(nums) {
    if (nums.length === 1) return nums[0];

    const map = {};
    const majorityCount = Math.ceil(nums.length / 2);

    for (const num of nums) {
      map[num] = (map[num] || 0) + 1;
      if (map[num] >= majorityCount) return num;
    }
  }
}
