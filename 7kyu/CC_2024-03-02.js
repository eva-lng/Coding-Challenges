/* Build a square

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example:
n = 3, so I expect a 3x3 square back just like below as a string:
+++
+++
+++
*/

// solution 1
function generateShape1(n){
  let shape = ''
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      shape += '+'.repeat(n)
    } else {
      shape += '\n' + '+'.repeat(n)
    }
  }
  return shape
}

// solution 2
function generateShape2(integer){
  return ('+'.repeat(n) + '\n').repeat(n).trim()
}