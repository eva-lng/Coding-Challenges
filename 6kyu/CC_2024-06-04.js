/* Simple Fun #221: Furthest Distance Of Same Letter

Given a string s of lowercase letters ('a' - 'z'), get the maximum distance between two same letters, and return this distance along with the letter that formed it.
If there is more than one letter with the same maximum distance, return the one that appears in s first.

Input/Output:
[input] string s
- A string of lowercase Latin letters, where at least one letter appears twice.

[output] a string
- The letter that formed the maximum distance and the distance itself.

Example:
For s = "fffffahhhhhhaaahhhhbhhahhhhabxx", the output should be "a23".

The maximum distance is formed by the character 'a' from index 5 to index 27 (0-based). Therefore, the answer is "a23".
*/

function distSameLetter(s) {
  const uniqueChars = [...new Set(s.split(''))];
  const charDist = {};
  let maxDist = 0;
  let letter = '';
  
  uniqueChars.forEach(char => {
    const dist = s.lastIndexOf(char) - s.indexOf(char) + 1;
    charDist[char] = dist;
  });
  
  uniqueChars.forEach(char => {
    if (charDist[char] > maxDist) {
      maxDist = charDist[char];
      letter = char;
    }
  });
  
  return `${letter}${maxDist}`;
}