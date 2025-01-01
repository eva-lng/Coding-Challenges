/* Prime Primes

Define a "prime prime" number to be a rational number written as one prime number over another prime number: primeA / primeB (e.g. 7/31)

Given a whole number N / n, generate the number of "prime prime" rational numbers less than 1, using only prime numbers between 0 and N / n(non inclusive).
Return the count of these "prime primes", and the integer part of their sum.

Example:
N = 6
// The "prime primes" less than 1 are:
2/3, 2/5, 3/5               // count: 3
2/3 + 2/5 + 3/5 = 1.6667    // integer part: 1

Thus, the function should return [3, 1].
*/

function isPrime(n) {
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function primePrimes(n) {
  let sum = 0;
  let count = 0;

  for (let b = 3; b < n; b++) {
    for (let a = 2; a < b; a++) {
      if (isPrime(a) && isPrime(b)) {
        sum += a / b;
        count++;
      }
    }
  }
  return [count, Math.floor(sum)];
}
