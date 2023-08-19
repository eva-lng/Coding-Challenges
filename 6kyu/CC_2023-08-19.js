/* Kebabize

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

Notes:
the returned string should only contain lowercase letters
*/

function kebabize(str) {
  const charStr = str.split('').filter(el => el.toLowerCase() !== el.toUpperCase()).join('')
  let result = charStr[0].toLowerCase()
  for (let i = 1; i < charStr.length; i++) {
    if (charStr[i] !== charStr[i].toLowerCase()) {
      result += '-' + charStr[i].toLowerCase()
    } else {
      result += charStr[i]
    }
  }
  return result
}