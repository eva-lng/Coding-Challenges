/* String Reversing, Changing case, etc.

Given 2 string parameters, show a concatenation of:
- the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
- a separator in between both strings: @@@
- the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
*/

function reverseAndMirror(s1,s2) {
  const str1 = [...s1].map(c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).join('');
  const str2 = [...s2].map(c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).reverse().join('');
  return str2 + '@@@' + str1.reverse().join('') + str1;
}