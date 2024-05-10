/* Simple reversed parenthesis

Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

For example:
solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.

Parenthesis will be either "(" or ")".
*/

function solve(s) {
  if (s.length % 2 !== 0) return -1;
  let rev = 0;
  let open = 0;
  
  for (let char of s) {
    if (char === '(') {
      open++;
    }
    else if (open > 0) {
      open--;
    } else {
      open++;
      rev++;
    }
  }
  return rev + open / 2;
}