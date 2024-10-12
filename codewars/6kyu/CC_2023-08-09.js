/* Which are in?

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/

// Solution 1
function inArray1(array1,array2){
  const str = array2.join(' ')
  return array1.filter(el => str.includes(el)).sort()
}

// Solution 2
function inArray2(array1,array2){
  const result = []
    
  for (const word of array2) {
    for (const substr of array1) {
      if (word.includes(substr)) {
        if (!result.includes(substr)) {
            result.push(substr)
        }
      }
    }
  }
    
  return result.sort()
}