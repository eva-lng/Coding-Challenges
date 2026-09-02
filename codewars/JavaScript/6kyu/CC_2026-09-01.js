/* Simple Fun #174: Unlucky Number

The number is considered to be unlucky if it does not have digits 4 and 7 and is divisible by 13. Please count all unlucky numbers not greater than n.

Example:
For n = 20, the result should be 2 (numbers 0 and 13).
For n = 100, the result should be 7 (numbers 0, 13, 26, 39, 52, 65, and 91)

Input/Output:
- [input] integer n
1 ≤ n ≤ 10^8(10^6 in Python)
- [output] an integer
*/

function unluckyNumber(n) {
  let count = 0;

  for (let i = 0; i <= n; i += 13) {
    if (isValid(i)) count++;
  }
  return count;
}

function isValid(n) {
  while (n > 0) {
    let lastDigit = n % 10;
    if (lastDigit === 4 || lastDigit === 7) return false;
    n = 0 | (n / 10);
  }
  return true;
}
