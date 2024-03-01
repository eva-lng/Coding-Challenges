/* Maximum Product

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes:
- Array/list size is at least 2
- Array/list numbers could be a mixture of positives, negatives also zeroes

Input >> Output Examples:
adjacentElementsProduct([1, 2, 3]); ==> return 6

Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

Explanation:
Max product obtained from multiplying  5 * 10  =  50 
*/

// solution 1
function adjacentElementsProduct1(array) {
  let maxProduct = array[0] * array[1]
  for (let i = 1; i < array.length - 1; i++) {
      const product = array[i] * array[i + 1]
      if (product > maxProduct) {
          maxProduct = product
      }
  }
  return maxProduct
}

// solution 2
function adjacentElementsProduct2(array) {
  let newArr = []
  for(i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1])
  }  
  return Math.max(...newArr)
}

// solution 3
function adjacentElementsProduct3(array) {
  return Math.max(...array.map((num, i) => num * array[i + 1]).slice(0, -1))
}