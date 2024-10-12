/* Coding 3min: Father and Son

Every uppercase letter is Father, The corresponding lowercase letters is the Son.
Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

For example:
sc("Aab") should return "Aa"
sc("AabBc") should return "AabB"
sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)
sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-)
*/

function sc(str){
  return str
    .split('')
    .filter(el => str.includes(el.toLowerCase()) && str.includes(el.toUpperCase()))
    .join('');
}