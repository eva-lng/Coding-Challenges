/* The Vowel Code

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// Solution 1
function encode1(string) {
  const vowelToNum = {a: '1', e: '2', i: '3', o: '4', u: '5'}
  let encoded = ''
  for (const ch of string) {
    encoded += vowelToNum.hasOwnProperty(ch) ? vowelToNum[ch] : ch
  }
  return encoded
}
  
function decode1(string) {
  const numToVowel = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}
  let decoded = ''
  for (const ch of string) {
    decoded += numToVowel.hasOwnProperty(ch) ? numToVowel[ch] : ch
  }
  return decoded
}

// Solution 2
const vowels = ['a', 'e', 'i', 'o', 'u']
const encode2 = string => string.split('').map(el => vowels.indexOf(el) + 1 || el).join('')
const decode2 = string => string.split('').map(el => vowels[Number(el) - 1] || el).join('')