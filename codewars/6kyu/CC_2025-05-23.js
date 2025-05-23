/* Sentence Calculator

Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:
- Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
- Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
- Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
- Other characters: 0 value

Note: input will always be a string
*/

function lettersToNumbers(s) {
  let res = 0;
  for (const ch of s) {
    if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) {
      res += ch.charCodeAt(0) - 96;
    } else if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
      res += (ch.toLowerCase().charCodeAt(0) - 96) * 2;
    } else if (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57) {
      res += ch.charCodeAt(0) - 48;
    }
  }
  return res;
}
