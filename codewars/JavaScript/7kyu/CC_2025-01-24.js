/* Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples:
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

function isAnagram1(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charMap = {};

  for (let ch of str1.toLowerCase()) {
    charMap[ch] = (charMap[ch] || 0) + 1;
  }

  for (let ch of str2.toLowerCase()) {
    if (!charMap[ch]) return false;
    charMap[ch] = charMap[ch] - 1;
  }

  return true;
}

function isAnagram2(str1, str2) {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}
