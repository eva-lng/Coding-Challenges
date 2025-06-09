/* Simple Fun #380: Find d = a + b + c

You are given a sorted integer array arr. It contains several uniq integers(negative, positive, or zero).

Your task is to find the largest d such that a + b + c = d, where a, b, c, and d are distinct elements of arr. If no such an element d found, return null.

Example:
For arr = [2,3,5,7,12], the output should be 12.
12 = 2 + 3 + 7

For arr = [2,16,64,256,1024], the output should be null.
No such an element d found.

For arr = [-100,-1,0,7,101], the output should be 0.
0 = -100 + -1 + 101

Note:
3 < arr.length <= 50
-1000 <= arr[i] <= 1000
*/

function findD(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        for (let x = 0; x < arr.length; x++) {
          if (i !== x && j !== x && k !== x) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum === arr[x] && max < sum) {
              max = sum;
            }
          }
        }
      }
    }
  }
  return max === -Infinity ? null : max;
}
