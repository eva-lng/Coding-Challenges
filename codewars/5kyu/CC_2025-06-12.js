/* Find number in an array # 2

Given an unsorted array arr, there are numbers 1 to n in arr, only two numbers are appear one time, all the other numbers appear two times.(That is, there are n*2-2 elements in the array) e.g. [1,2,4,3,5,4,2,1]. Your task is to find the two unique number, and return them by an array [3,5](the small number in front of big number).

Note:
- All numbers are positive integers;
- The length of array always more than 3;
- Please pay attention to optimizing the code to avoid time out.
- In the performance test(1000000 elements x 100 testcases), the time consuming of each test case should be within 8ms. This means, your code should run as fast as a rocket ;-)

Some Examples
findTwoUnique([1,2,4,3,5,4,2,1]) === [3,5]
findTwoUnique([1,1,2,3,3,4]) === [2,4]
findTwoUnique([9,9,8,8,7,6,5,4,3,2,1,2,3,4,5,6]) === [1,7]
*/

const a = Array(1000000).fill(false);

function findTwoUnique(arr) {
  for (let i = 0; i < a.length; i++) {
    a[i] = false;
  }
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    a[num] = !a[num];
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i]) res.push(i);
    if (res.length > 1) return res;
  }
}
