/* The old switcheroo 2

Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.

Examples:
'abc'      --> '123'
'ABC'      --> '123'
'codewars' --> '315452311819'
'abc-#@5'  --> '123-#@5'
*/

function encode(str) {
  let res = "";
  for (const s of str) {
    const code = s.toLowerCase().charCodeAt(0);
    if (code >= 97 && code <= 122) {
      res += `${code - 96}`;
    } else {
      res += s;
    }
  }
  return res;
}
