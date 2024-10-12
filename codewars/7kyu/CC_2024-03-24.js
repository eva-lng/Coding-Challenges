/* Strong Number (Special Numbers Series #2)

Strong number is a number with the sum of the factorial of its digits is equal to the number itself.
For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task:
Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

Examples:
1 is a strong number, because 1! = 1, so return "STRONG!!!!".
123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".
*/

// solution 1
function strong1(n) {
  const numStr = n.toString();
  let strength = 0;
  
  for (let i = 0; i < numStr.length; i++) {
    let factorial = 1;
    for (let j = 1; j <= +numStr[i]; j++) {        
      factorial *= j;
    }
    strength += factorial;
  }
  return strength === n ? "STRONG!!!!" : "Not Strong !!";
}

// solution 2
function strong2(n) {
  let strength = 0;

  for (let digit of String(n)) {
    strength += factorial(Number(digit));
  }
  return strength === n ? "STRONG!!!!" : "Not Strong !!";
}

function factorial(number) {
  return number ? number * factorial(number - 1) : 1;
}