/* Which are in?

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