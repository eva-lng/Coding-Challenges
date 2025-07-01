/* Find number in an array # 3

Given an array arr, there are some integers in arr. All the elements are 1(absolute) difference from its neighbors. Like this:
arr = [5,6,7,6,7,6,5,4,3,2,3,4,5]

Given two numbers nth and number, your task is find the index of nth number. For example:
arr = [5,6,7,6,7,6,5,4,3,2,3,4,5]
findIndexOf(arr, 1, 5) === 0  //nth = 1, number = 5
findIndexOf(arr, 2, 5) === 6  //nth = 2, number = 5
findIndexOf(arr, 3, 5) === 12 //nth = 3, number = 5
findIndexOf(arr, 1, 3) === 8 //nth = 1, number = 3

If nth less than 1 or nth more than the count of numbers or number is not found in arr, return null.
arr = [5,6,7,6,7,6,5,4,3,2,3,4,5]
findIndexOf(arr, 0, 5) === null //nth is starting from 1
findIndexOf(arr, -1, 5) === null //nth is starting from 1
findIndexOf(arr, 4, 5) === null //number 5 only appear 3 times in arr
findIndexOf(arr, 1, 10) === null //arr doesn't contains number 10

Note:
- Arguments arr always be an array that contains at least 5 elements; All elements are positive integers;
- Arguments nth always be an integer(negative, positive or 0);
- Arguments number always be an positive integer;
- Please pay attention to optimizing the code to avoid time out.
- In the performance test(10000000 elements x 100 testcases), the time consuming of each test case should be within 6ms. This means, Your algorithm should be faster than O(n), your code should run as fast as a rocket ;-)
*/

function findIndexOf(arr, nth, number) {
  if (nth < 1 || nth >= arr.length);
  let count = 0;

  for (let i = 0; i < arr.length; i += Math.abs(number - arr[i]) || 1) {
    if (arr[i] === number) {
      count++;
      if (count === nth) return i;
    }
  }
  return null;
}
