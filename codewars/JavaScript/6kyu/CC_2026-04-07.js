/* Missing Alphabet

In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

The function should insert only after the first occurrence of each character of the input string, all the alphabet letters that:
-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

Example:
input: "holly"
missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"
output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).
*/

function insertMissingLetters(str) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const modAbc = new Set(abc.split("").filter((c) => !str.includes(c)));
  const charCount = {};
  let res = "";

  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    if (charCount[str[i]] > 1) {
      res += str[i];
      continue;
    }

    const idx = abc.indexOf(str[i]) + 1;
    let toAdd = "";

    for (let j = idx; j < abc.length; j++) {
      if (modAbc.has(abc[j])) {
        toAdd += abc[j];
      }
    }
    res += str[i] + toAdd.toUpperCase();
  }

  return res;
}
