/* 347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
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

    const arr = Object.entries(count).map(([n, freq]) => [freq, parseInt(n)]);
    arr.sort((a, b) => b[0] - a[0]);

    return arr.slice(0, k).map((pair) => pair[1]);
  }
}
