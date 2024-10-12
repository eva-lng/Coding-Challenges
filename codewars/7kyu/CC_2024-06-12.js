/* Simple array product

In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

Examples:
solve( [[1, 2],[3, 4]] ) = 8. The max product is given by 2 * 4
solve( [[10,-15],[-1,-3]] ) = 45, given by (-15) * (-3)
solve( [[1,-1],[2,3],[10,-100]] ) = 300, given by (-1) * 3 * (-100)
*/

function solve(a) {
  let min = 1;
  let max = 1;
  
  for (const subArr of a) {
    const cur = [];
    for (const n of subArr) {
      cur.push(n * min);
      cur.push(n * max);
    }
    min = Math.min(...cur);
    max = Math.max(...cur);
  }
  return max;
}