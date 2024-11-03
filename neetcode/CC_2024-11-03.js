/* Top K Elements in List

Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example 1:
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Example 2:
Input: nums = [7,7], k = 1
Output: [7]

Constraints:
1 <= nums.length <= 10^4
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums
*/

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */

  // bucket sort
  topKFrequent1(nums, k) {
    const count = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }
    for (const n in count) {
      freq[count[n]].push(parseInt(n));
    }

    const res = [];
    for (let i = freq.length - 1; i > 0; i--) {
      for (const n of freq[i]) {
        res.push(n);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
  
  // sorting
  topKFrequent2(nums, k) {
    const count = {};
    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }

    const arr = Object.entries(count)
                      .map(([n, freq]) => [freq, parseInt(n)]);
    arr.sort((a, b) => b[0] - a[0]);

    return arr.slice(0, k).map(pair => pair[1]);
  }
}