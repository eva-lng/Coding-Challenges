/* Transform To Prime

Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

Notes:
List size is at least 2 .
List's numbers will only positives (n > 0) .
Repetition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .

Input >> Output Examples:
1- minimumNumber ({3,1,2}) ==> return (1)

Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
*/

function minimumNumber(numbers){
  const sum = numbers.reduce((acc, n) => acc + n, 0)
  for (let i = sum; ; i++) {
    if (isPrime(i)) return i - sum
  }
}

function isPrime(n){
  if (n < 2) return false
  if (n % 2 === 0) return n === 2
  for (let i = 3; i * i < n; i+=2) {
    if (n % i === 0) return false
  }
  return true
}