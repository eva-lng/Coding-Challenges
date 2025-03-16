/* Sort an Array

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

Constraints:
1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  // merge sort
  sortArray(nums) {
    return this.mergeSort(nums);
  }

  mergeSort(arr) {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const sortedL = this.mergeSort(left);
    const sortedR = this.mergeSort(right);
    return this.merge(sortedL, sortedR);
  }

  merge(left, right) {
    const res = [];
    let indexL = 0;
    let indexR = 0;

    while (indexL < left.length && indexR < right.length) {
      if (left[indexL] < right[indexR]) {
        res.push(left[indexL]);
        indexL++;
      } else {
        res.push(right[indexR]);
        indexR++;
      }
    }
    return res.concat(left.slice(indexL)).concat(right.slice(indexR));
  }
}
