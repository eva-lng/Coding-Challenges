/* Find the Nth longest string in an Array

Implement a function that, given an array of strings and a positive integer n, return the nth longest string (1-based indexing) from the array.

If multiple strings have the same length, then compare them by their original order in the array.

For example:
arr = ["Hello", "World", "Codewars", "Katas"]
n = 3

The function should return "World" because:
1. "Codewars" is first with the longest length = 8
2. "Hello" comes second with length = 5
3. "World", it also has length = 5 but appears after "Hello" in the original array

Constraints:
* In this kata, you can safely assume that:
* The input array is never empty
* 1 <= n <= array length
*/

function longest(arr, n) {
  return arr
    .map((str, idx) => ({ str, len: str.length, idx }))
    .sort((a, b) => {
      if (a.len === b.len) return a.idx - b.idx;
      return b.len - a.len;
    })[n - 1].str;
}
