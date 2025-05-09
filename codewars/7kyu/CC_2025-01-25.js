/* Parts of a list

Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
- Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
- Each part will be in a string
- Elements of a pair must be in the same order as in the original array.

Example of returns:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
*/

function partlist(arr) {
  const res = [];

  for (let i = 1; i < arr.length; i++) {
    const newArr = [];
    newArr.push(arr.slice(0, i).join(" "));
    newArr.push(arr.slice(i).join(" "));
    res.push(newArr);
  }
  return res;
}
