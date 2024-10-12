/* Rot13

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  
  for (let i = 0; i < message.length; i++) {
    const char = message[i].toLowerCase();
    if (alphabet.includes(char)) {
      const sum = alphabet.indexOf(char) + 13;
      const newIdx = sum < alphabet.length ? sum : Math.abs(alphabet.length - sum);
      message[i] === char ? result += alphabet[newIdx] : result += alphabet[newIdx].toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}