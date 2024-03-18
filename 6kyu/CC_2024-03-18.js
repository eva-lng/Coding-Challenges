/* Format words into a sentence 

Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:
Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.

Example: (Input --> output)
['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/

function formatWords(words) {
  if (!words) return "";

  const arr = words.filter((el) => el);
  if (!arr.length) return "";

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      result += arr[i];
    } else if (i < arr.length - 1) {
      result += ", " + arr[i];
    } else {
      result += " and " + arr[i];
    }
  }
  return result;
}
