/* Dashatize it

Given a variable n,
If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
If n is not an integer, return the string "NaN".

Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
  if (!Number.isInteger(num)) return 'NaN'
  const str = Math.abs(num).toString()
  let result = str.slice(0, 1)
    
  for (let i = 1; i < str.length; i++) {
    if (+str[i - 1] % 2 !== 0 || +str[i] % 2 !== 0) {
      result += '-'
    }
    result += str[i]
  }
  return result
}