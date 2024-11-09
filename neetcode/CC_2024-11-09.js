/* Two Integer Sum II

Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use O(1) additional space.

Example 1:
Input: numbers = [1,2,3,4], target = 3
Output: [1,2]

Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

Constraints:
2 <= numbers.length <= 1000
-1000 <= numbers[i] <= 1000
-1000 <= target <= 1000
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
    for ( let i = 0; i < numbers.length; i++) {
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