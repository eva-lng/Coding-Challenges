/* Valid Braces

*/

// Solution 1
function validBraces1(braces){
  const stack = [];
  const openBraces = '([{';
  const closeBraces = ')]}';
    
  for (const char of braces) {
    if (openBraces.includes(char)) {
      stack.push(char);
    } else if (closeBraces.includes(char)) {
      const lastOpenBrace = stack.pop();
      const matchingOpenBrace = openBraces[closeBraces.indexOf(char)];
      if (matchingOpenBrace !== lastOpenBrace) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Solution 2
function validBraces2(braces){
  const pairs = {'(': ')', '[': ']', '{': '}'};
  const stack = [];
    
  for (const char of braces) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (char !== pairs[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}