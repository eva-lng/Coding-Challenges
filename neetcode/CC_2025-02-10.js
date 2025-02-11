/* Set Mismatch

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]

Constraints:
2 <= nums.length <= 104
1 <= nums[i] <= 104
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  // array
  findErrorNums1(nums) {
    const counts = new Array(nums.length + 1).fill(0);
    let dup = 0;
    let missing = 0;

    for (let n of nums) {
      counts[n] += 1;
    }
    for (let i = 1; i < counts.length; i++) {
      if (counts[i] === 2) dup = i;
      if (counts[i] === 0) missing = i;
    }
    return [dup, missing];
  }

  // brute force
  findErrorNums2(nums) {
    let dup = -1;
    let missing = -1;

    for (let i = 1; i <= nums.length; i++) {
      const count = nums.filter((n) => n === i).length;
      if (count === 2) {
        dup = i;
      } else if (count === 0) {
        missing = i;
      }
    }
    return [dup, missing];
  }
}
