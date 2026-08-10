/* Change it up

Create a function that takes a string as a parameter and does the following, in this order:
1. Replaces every letter with the letter following it in the alphabet (see note below)
2. Makes any vowels capital
3. Makes any consonants lower case

Note:
- the alphabet should wrap around, so Z becomes A
- in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

function changer(str) {
  const abc = "abcdefghijklmnopqrstuvwxyza";

  return str
    .split("")
    .map((el) => {
      if (!abc.includes(el.toLowerCase())) return el;
      const c = abc[abc.indexOf(el.toLowerCase()) + 1];
      return "aeiou".includes(c) ? c.toUpperCase() : c;
    })
    .join("");
}
