/* Is it a letter?

Write a function, isItLetter, which tells us if a given character is a letter or not.
*/

function isItLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}