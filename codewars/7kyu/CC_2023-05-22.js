/* Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {
  let arr = s.toLowerCase().split('');
  let result = arr.map((char, i) => {
    let repeatChar = char.repeat(i + 1);
    let capChar = repeatChar[0].toUpperCase() + repeatChar.slice(1);
    return capChar;
  })
  return result.join('-');
}