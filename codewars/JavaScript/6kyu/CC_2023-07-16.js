/* Two Sum

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

// Solution 1
function twoSum1(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      let secondNum = target - numbers[i];
      let secondIdx = numbers.indexOf(secondNum, i + 1);
      if (i < secondIdx){
        return [i, secondIdx];
      }
    }
}

// Solution 2
function twoSum2(numbers, target) {
    let checkedNums = new Map
    for (let i = 0; i < numbers.length; i++) {
      const x = numbers[i]
      const y = target - x
      if (checkedNums.has(y)) {
          return [checkedNums.get(y), i]
      }
      checkedNums.set(x, i)
    }
}