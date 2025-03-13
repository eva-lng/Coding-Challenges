/* Simple string characters

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

The order is: uppercase letters, lowercase letters, numbers and special characters.
"*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
*/

function solve(s) {
  const res = [0, 0, 0, 0];

  for (const c of s) {
    if (c.toLowerCase() !== c) {
      res[0]++;
    } else if (c.toUpperCase() !== c) {
      res[1]++;
    } else if (c >= 0 && c <= 9) {
      res[2]++;
    } else {
      res[3]++;
    }
  }
  return res;
}
