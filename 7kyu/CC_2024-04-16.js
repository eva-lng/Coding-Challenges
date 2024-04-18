/* Mobile Display Keystrokes

Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how many keystrokes you have to do for a specific word.

Given a string, return the number of keystrokes necessary to type it. You can assume that the input will entirely consist of characters included in the mobile layout (lowercase letters, digits, and the symbols * and #).

Examples:
"*#"       =>  2 (1 + 1)
"123"      =>  3 (1 + 1 + 1)
"abc"      =>  9 (2 + 3 + 4)
"codewars" => 26 (4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)
*/

function mobileKeyboard(str){
  let count = 0;
  const keyboard = {
    1: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '#'],
    2: ['a', 'd', 'g', 'j', 'm', 'p', 't', 'w'],
    3: ['b', 'e', 'h', 'k', 'n', 'q', 'u', 'x'],
    4: ['c', 'f', 'i', 'l', 'o', 'r', 'v', 'y'],
    5: ['s', 'z']
  };
  
  for (const char of str) {
    for (const key in keyboard) {
      if (keyboard[key].includes(char)) {
        count += +key;
      }
    }
  }
  return count;
}