/* Word values

Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ... z = 26.
You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

["abc", "abc abc"] should return [6, 24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.
"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.
*/

function wordValue1(a) {
  return a.map((s, i) => countVal(s) * (i + 1));
}

function countVal(str) {
  let sum = 0;
  for (let c of str) {
    if (c !== ' '){
      sum += c.charCodeAt() - 96; 
    }
  }
  return sum;
}

function wordValue2(a) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return a.map((s, i) => (
    (i + 1) * [...s].reduce((sum, c) => sum + 1 + chars.indexOf(c), 0)
  ));
}