/* Longest Consecutive Sequence

Given an array of integers nums, return the length of the longest consecutive sequence of elements.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [2,20,4,10,3,4,5]
Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:
Input: nums = [0,3,2,5,4,6,1,1]
Output: 7

Constraints:
0 <= nums.length <= 1000
-10^9 <= nums[i] <= 10^9
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

// hash set
  longestConsecutive1(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of numSet) {
      if (!numSet.has(n - 1)) {
        let length = 1;
        while (numSet.has(n + length)) {
          length++;
        }
        longest = Math.max(longest, length);
      }
    }
    return longest;
  }

  // sorting
  longestConsecutive2(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);

    let longest = 0;
    let curr = nums[0];
    let streak = 0;
    let i = 0;

    while (i < nums.length) {
      if (curr !== nums[i]) {
        curr = nums[i];
        streak = 0;
      }
      while (i < nums.length && curr === nums[i]) {
        i++;
      }
      streak++;
      curr++;
      longest = Math.max(longest, streak);
    }
    return longest;
  }

  // brute force
  longestConsecutive3(nums) {
    let longest = 0;
    const numSet = new Set(nums);

    for (let n of nums) {
      let curr = n;
      let streak = 0;

      while (numSet.has(curr)) {
        streak++;
        curr++;
      }
      longest = Math.max(longest, streak);
    }
    return longest;
  }
}