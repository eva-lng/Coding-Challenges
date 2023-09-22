/* Decipher this!

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples:
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  return str
    .split(' ')
    .map(el => {
      const charCode = parseInt(el)
      const first = String.fromCharCode(charCode)
      const numLength = charCode.toString().length
      const second = el[numLength]
      const last = el[el.length - 1]
      if (el.length === numLength) return first
      else if (el.length === numLength + 1) return first + second
      else {
        return first + last + el.slice(numLength + 1, el.length - 1) + second
      }
    })
    .join(' ')
}; 