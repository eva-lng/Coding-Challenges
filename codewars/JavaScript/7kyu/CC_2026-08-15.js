/* Split by Mask

Given a xs and a mask (a list of lengths), split the string into its parts accordingly.

Examples:

|     xs        |  Mask (lengths) |          Output           |
|---------------|-----------------|---------------------------|
|  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
|  "codewars"   |  [4, 4]         |  ["code", "wars"]         |

Notes:
- The mask only contains strictly positive integers.
- A mask is valid if and only if the sum of the lengths is equal to the length of the string.
Otherwise, return Null.
*/

function split(string, mask) {
  const sum = mask.reduce((acc, n) => n + acc, 0);
  if (sum !== string.length) return null;

  const res = [];
  let x = 0;

  for (const n of mask) {
    res.push(string.slice(x, x + n));
    x += n;
  }

  return res;
}
