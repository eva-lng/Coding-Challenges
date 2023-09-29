/* Framed Reflection

You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:
*********
* olleH *
* dlroW *
*********

Words in your solution should be left-aligned.
*/

function mirror(text){
  const frameLen = text.split(' ').sort((a, b) => b.length - a.length)[0].length + 4
  const reversed = text
    .split(' ')
    .map(word => `* ${word.split('').reverse().join('')}${' '.repeat(frameLen - word.length - 3)}*\n`)
    .join('')
  return `${'*'.repeat(frameLen)}\n${reversed}${'*'.repeat(frameLen)}`
}