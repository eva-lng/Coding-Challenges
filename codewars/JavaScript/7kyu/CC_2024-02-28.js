/* Largest pair sum in array

Given a sequence of numbers, find the largest pair sum in the sequence.

For example:
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/

// solution 1
function largestPairSum1(numbers){
  let max = -Infinity
  let secondMax = -Infinity

  for (let n of numbers) {
    if (n > max) {
      secondMax = max
      max = n
    } else if (n > secondMax) {
      secondMax = n
    }
  }

  return max + secondMax
}

// solution 2
function largestPairSum2(numbers){
  numbers.sort((a, b) => b - a )
  return numbers[0] + numbers[1]
}