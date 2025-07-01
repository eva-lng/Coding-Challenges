/* Love vs friendship

If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
The input will always be made of only lowercase letters and will never be empty.
*/

// solution 1
function wordsToMarks1(string){
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return string
    .split('')
    .reduce((sum, c) => sum + letters.indexOf(c) + 1, 0);
}

// solution 2
function wordsToMarks2(string) {
  return [...string].reduce((sum, c) => sum + c.charCodeAt() - 96, 0);
}