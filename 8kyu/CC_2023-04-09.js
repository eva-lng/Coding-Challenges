/* Sum of positive

You get an array of numbers, return the sum of all of the positives ones.
Example: [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. 
*/

function positiveSum(arr) {
  return arr.filter(n => n > 0).reduce((sum, n) => sum + n, 0);  
}

/* Switch it Up!

When provided with a number between 0-9, return it in words.
Input : 1
Output : "One".
If your language supports it, try using a switch statement.
*/

function switchItUp(number) {
  switch(number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}