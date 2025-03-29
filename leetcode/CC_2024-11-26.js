/* 169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the candidate element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Constraints:
n == nums.length
1 <= n <= 5 * 10^4
-10^9 <= nums[i] <= 10^9
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

  // Boyer–Moore majority vote algo
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

  majorityElement3(nums) {
    if (nums.length === 1) return nums[0];

    const map = new Map();
    const majorityCount = Math.ceil(nums.length / 2);

    for (const num of nums) {
      const currentNum = map.get(num);

      if (currentNum) {
        map.set(num, currentNum + 1);
        if (currentNum + 1 >= majorityCount) return num;
      } else {
        map.set(num, 1);
      }
    }
  }
}
