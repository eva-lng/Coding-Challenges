/* Primorial Of a Number

Definition (Primorial Of a Number):
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task:
Given a number N, calculate its primorial.

Notes:
Only positive numbers will be passed (N > 0).

Input >> Output Examples:
numPrimorial(3) ==> return (30)
Explanation:
Since the passed number is (3), then the primorial should obtained by multiplying  2 * 3 * 5 = 30.

numPrimorial(5) ==> return (2310)
Explanation:
Since the passed number is (5), then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310.

numPrimorial(6) ==> return (30030)
Explanation:
Since the passed number is (6), then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .
*/

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function numPrimorial(n) {
  const arr = [];
  let i = 2;

  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr.reduce((a, b) => a * b, 1);
}
