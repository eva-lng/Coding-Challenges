/* 229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:
Input: nums = [3,2,3]
Output: [3]

Example 2:
Input: nums = [1]
Output: [1]

Example 3:
Input: nums = [1,2]
Output: [1,2]

Constraints:
1 <= nums.length <= 5 * 10^4
-10^9 <= nums[i] <= 10^9

Follow up: Could you solve the problem in linear time and in O(1) space?
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  // Boyer-Moore algo
  majorityElement1(nums) {
    let majority1 = 0;
    let majority2 = 0;
    let count1 = 0;
    let count2 = 0;
    const res = [];

    for (const n of nums) {
      if (n === majority1) {
        count1++;
      } else if (n === majority2) {
        count2;
      } else if (count1 === 0) {
        majority1 = n;
        count1++;
      } else if (count2 === 0) {
        majority2 = n;
        count2++;
      } else {
        count1--;
        count2--;
      }
    }

    count1 = 0;
    count2 = 0;

    for (const n of nums) {
      if (n === majority1) {
        count1++;
      } else if (n === majority2) {
        count2++;
      }
    }

    if (count1 > nums.length / 3) {
      res.push(majority1);
    }
    if (count2 > nums.length / 3) {
      res.push(majority2);
    }
    return res;
  }

  // hashmap
  majorityElement2(nums) {
    const freq = {};
    const res = [];

    for (const n of nums) {
      freq[n] = (freq[n] || 0) + 1;
    }

    for (const n in freq) {
      if (freq[n] > nums.length / 3) {
        res.push(n);
      }
    }
    return res;
  }
}
