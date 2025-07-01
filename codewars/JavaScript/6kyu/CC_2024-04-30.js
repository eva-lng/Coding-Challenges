/* Reverse FizzBuzz

Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

Notes:
If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
All numbers in the sequence will be greater than zero.
You will never receive an empty sequence.

Examples:
reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]
*/

function reverseFizzBuzz(s) {
  const map = {
    Fizz: [3],
    Buzz: [5],
    FizzBuzz: [15],
    'Fizz Buzz': [9, 10],
    'Buzz Fizz': [5, 6]
  };
  
  if (s in map) return map[s];
  const arr = s.split(' ');
  const idx = arr.findIndex(n => !isNaN(n));
  const num = +arr[idx];
  return arr.map((el, i) => -idx + i + num);
}