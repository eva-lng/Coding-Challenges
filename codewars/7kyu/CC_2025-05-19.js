/* Friday the 13th Part 1

It's Friday the 13th, and Jason is ready for his first killing spree!
Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

JavaScript:
var counselors = [["Chad", 2], ["Tommy", 9]];
var jason = 7;
*/

function killcount(counselors, jason) {
  const res = [];
  counselors.forEach((el) => {
    if (el[1] < jason) res.push(el[0]);
  });
  return res;
}
