/* 167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

Constraints:
2 <= numbers.length <= 3 * 10^4
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
*/

class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */

  // two pointer
  twoSum1(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
      const curSum = numbers[l] + numbers[r];

      if (curSum > target) {
        r--;
      } else if (curSum < target) {
        l++;
      } else {
        return [l + 1, r + 1];
      }
    }
    return [];
  }

  // hash map
  twoSum2(numbers, target) {
    const mp = new Map();
    for (let i = 0; i < numbers.length; i++) {
      const tmp = target - numbers[i];
      if (mp.has(tmp)) {
        return [mp.get(tmp), i + 1];
      }
      mp.set(numbers[i], i + 1);
    }
    return [];
  }

  // binary search
  twoSum3(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      let l = i + 1;
      let r = numbers.length - 1;
      let tmp = target - numbers[i];
      while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (numbers[mid] === tmp) {
          return [i + 1, mid + 1];
        } else if (numbers[mid] < tmp) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
    }
    return [];
  }

  // brute force
  twoSum4(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i + 1, j + 1];
        }
      }
    }
    return [];
  }
}
