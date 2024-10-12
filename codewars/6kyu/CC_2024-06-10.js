/* Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples:
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left,right){
  const weight = (s) => [...s].reduce((acc, n) => c === '!' ? acc + 2 : acc + 3, 0)
  return weight(left) > weight(right) ? 'Left' : weight(right) > weight(left) ? 'Right' : 'Balance';
}