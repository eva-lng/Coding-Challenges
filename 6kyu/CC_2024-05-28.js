/* Each n-th element of l

In this task, you need to write a function each, that takes an integer number n and a ( possibly empty ) list of integers, and returns a list of every nth element of the input list ( which possibly is the empty list ).

If n < 0, count by abs n from the end of the list.
If n == 0, return an empty list.

Examples:
each 0 [1,2,3,4,5,6] = []  
each 1 [1,2,3,4,5,6] = [1,2,3,4,5,6]  
each (-1) [1,2,3,4,5,6] = [6,5,4,3,2,1]  
each 2 [1,2,3,4,5,6] = [2,4,6]  
each (-2) [1,2,3,4,5,6] = [5,3,1]  
each 3 [1,2] = []  
each (-3) [1,2] = []  
each 5 [1,2,3,4,5,6,7] = [5]  
each (-5) [1,2,3,4,5,6,7] = [3]  
*/

// solution 1
function each1(n, xs) {
  if (n === 0) return [];
  if (n === 1) return xs;
  const arr = n > 0 ? xs : xs.slice().reverse()
  const res = [];
  
  for (let i = Math.abs(n) - 1; i < arr.length; i += Math.abs(n)) {
    res.push(arr[i]);
  }
  return res;
}

// solution 2
function each2(n, xs) {
  if (n === 0) return [];
  if (n === 1) return xs;
  if (n < 0) xs.reverse();
  if (n === -1) return xs;

  return xs.filter((el, i) => (i + 1) % Math.abs(n) === 0);
}