/* The longest bracket substring in the string

Given a string str consisting of some number of "(" and ")" characters, your task is to find the longest substring in str such that all "(" in the substring are closed by a matching ")". The result is the length of that substring.

For example:
"()()(" => 4
Because "()()" is the longest substring, which has a length of 4

Note:
- All inputs are valid.
- If no such substring found, return 0.
- Please pay attention to the performance of code. ;-)
- In the performance test(100000 brackets str x 100 testcases), the time consuming of each test case should be within 35ms. This means, your code should run as fast as a rocket ;-)

Some Examples:
 "" => 0
"()" => 2
"()(" => 2
"()()" => 4
"()()(" => 4
"(()())" => 6
"(()(())" => 6
"())(()))" => 4
"))((" => 0
*/

function findLongest(str) {
  let max = 0;
  let start = -1;
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else if (str[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
        const length = i - (stack.length > 0 ? stack[stack.length - 1] : start);
        max = Math.max(max, length);
      } else {
        start = i;
      }
    }
  }
  return max;
}
