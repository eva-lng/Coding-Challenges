/* Simple Fun #350: Count Pairs

Some positive integers can be written as the difference of the squares of 2 positive integers, i.e., n = a² - b².

For instance, 3 can be written as 2² - 1².

Some numbers can be written in that format in more than one way. For example, 15 can be written as 4² - 1² or 8² - 7².

Task:
Your task is, given a positive integer n(1 ≤ n ≤ 1013), to calculate the number of such pairs (a, b), where n = a² - b² and both a and b are positive integers.

Example:
For n = 1, The output should be 0.
It is impossible to write 1 as a difference of two squares.

For n = 3, The output should be 1.
3 = 2² - 1²

For n = 15, The output should be 2.
15 = 4² - 1²
15 = 8² - 7²

Note:
- All inputs are valid.
- In order to avoid timeout, be aware of the code's performance ;-)
*/

/*
explanation:
n = a² - b² = (a-b)(a+b)
(a-b)(a+b) = a(a+b) - b(a+b) = a² + ab - ab - b² = a² - b²

x = a-b, y = a+b, then n = xy

x+y = (a-b) + (a+b) = 2a, y-x = (a+b) - (a-b) = 2b
=>
a = (x+y)/2, b = (y-x)/2
*/
function countPairs(n) {
  let count = 0;

  for (let x = 1; x * x <= n; x++) {
    if (n % x === 0) {
      const y = n / x;
      if ((x + y) % 2 === 0 && x < y) count++;
    }
  }

  return count;
}
