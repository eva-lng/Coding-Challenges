/* The search for Primes! Twin Primes!

A twin prime is a prime number that is either 2 less or 2 more than another prime number—for example, either member of the twin prime pair (41, 43). In other words, a twin prime is a prime that has a prime gap of two. Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair. (from wiki https://en.wikipedia.org/wiki/Twin_prime)

Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.

If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.

Ex n = 10
Twin Primes are (3,5) (5,7) so your function should return 2!
*/

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function twinPrime(n) {
  let count = 0;

  for (let i = 3; i <= n; i++) {
    if (isPrime(i - 1) && isPrime(i + 1)) {
      count++;
    }
  }
  return count;
}
