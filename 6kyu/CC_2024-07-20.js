/* Alphabetized

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:
alphabetized("The Holy Bible") // "BbeehHilloTy"
*/

function alphabetized(s) {
  return s
    .trim().split(' ').join('').split('')
    .filter(c => c.toLowerCase() !== c.toUpperCase())
    .sort((a, b) => {
      if (a.toLowerCase() !== b.toLowerCase()) {
        return a.localeCompare(b);
      } else {
        return a;
      }
    })
    .join('');
}