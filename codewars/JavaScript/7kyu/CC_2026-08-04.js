/* Halving Sum

Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...

All elements of the sum are the results of integer division.

Example:
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum1(n) {
  if (n === 1) return n;
  return n + halvingSum1(Math.floor(n / 2));
}

function halvingSum2(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}
