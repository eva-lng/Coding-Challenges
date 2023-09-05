/* Grouping in string

In this kata you have to find whether same elements of the string are grouped together.

Example:
Input	    Output
112233	    true
11223311	false

Explanation:
In first example same elements are grouped together: (11)(22)(33), hence it should return true.
In the second example there are two different groups of 1's: (11)2233(11), hence it should return false.
*/

// Solution 1
const isConsecutive1 = (str) => {
  const arr = [...str].filter((el, i) => el !== str[i - 1]).join('')
  const set = [...new Set(str)].join('')
  return arr === set
}

// Solution 2
const isConsecutive2 = (str) => {
  const arr = []
  str.split('').forEach((el, i) => {
    if (el !== str[i + 1]) {
      arr.push(el)
    }
  })
  for (let el of arr) {
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) return false
  }
  return true
}