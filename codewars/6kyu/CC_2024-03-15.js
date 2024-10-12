/* Array Deep Count

You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples:
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7

The input will always be an array.
*/

function deepCount(a) {
  let count = a.length;
  for (const el of a) {
    if (Array.isArray(el)) {
      count += deepCount(el);
    }
  }
  return count;
}
