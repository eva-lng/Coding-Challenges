/* Sum of prime-indexed elements

In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.
*/

function total(arr) {
  let sum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) sum += arr[i];
  }
  return sum;
}

function isPrime(n) {
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  const sqrt = Math.sqrt(n);
  for (let i = 5; i <= sqrt; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
