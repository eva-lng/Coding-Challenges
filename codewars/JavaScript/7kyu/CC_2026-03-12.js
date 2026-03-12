/* Sequence to 1

Given the number n, return the sequence of numbers from n to 1.

Range:
The number n can be negative and also large number: -9999 <= n <= 9999

Examples:
n =  5    >>     5, 4, 3, 2, 1
n = -1    >>    -1, 0, 1
*/

function seqToOne(n) {
  const res = [];

  while (n !== 1) {
    if (n < 1) {
      res.push(n++);
    } else {
      res.push(n--);
    }
  }
  res.push(1);

  return res;
}
