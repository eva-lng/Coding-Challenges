/* Compare Strings by Sum of Chars

Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
- null should be treated as empty strings
- If the string contains other characters than letters, treat the whole string as it would be empty
- Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

function calcValue(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (!str || str.split('').some(el => !alphabet.includes(el))) return 0
  return str.toUpperCase().split('').reduce((acc, n) => acc + n.charCodeAt(0), 0)
}

function compare(s1, s2) {
  return calcValue(s1) == calcValue(s2)
}