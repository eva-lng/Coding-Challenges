/* Simple Encryption #1 - Alternating Split 

Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
  if (!text || n <= 0) return text
  const even = []
  const odd = []
  let currentStr = text
  
  for (let i = 0; i < n; i++) {
    currentStr.split('').forEach((el, idx) => idx % 2 ? odd.push(el) : even.push(el))
    currentStr = odd.join('') + even.join('')
    even.length = 0
    odd.length = 0
  }
  return currentStr
}
  
function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText
  const mid = Math.floor(encryptedText.length / 2)
  let result = encryptedText
  
  for (let i = 0; i < n; i++) {
    let even = result.slice(mid)
    let odd = result.slice(0, mid)
    let newStr = ''
    
    for (let j = 0; j < mid; j++) {
      newStr += even[j] + odd[j]
    }
    if (encryptedText.length % 2) {
      newStr += even[even.length - 1]
    }
    result = newStr
  }
  return result;
}