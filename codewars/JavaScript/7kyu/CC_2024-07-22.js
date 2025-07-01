/* Find the Missing Number

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
*/

function missingNo(nums) {
  let missingNum = nums.length * (nums.length + 1) / 2;
  for (let i = 0; i < nums.length; i++) {
    missingNum -= nums[i];
  }
  return missingNum;
}