/* Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
*/

function findMissingLetter(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const first = alphabet.indexOf(array[0].toLowerCase())

  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() !== alphabet.charAt(first + i)) {
      return array[i] === array[i].toLowerCase() ? alphabet.charAt(first + i) : alphabet.charAt(first + i).toUpperCase()
    }
  }
}