/* Disarium Number (Special Numbers Series #3)

Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task:
Given a number, Find if it is Disarium or not .

Notes:
Number passed is always Positive .
Return the result as String

Input >> Output Examples:
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"

disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

function disariumNumber(n) {
  const arr = n.toString().split("");
  const x = arr.reduce((sum, num, i) => sum + Number(num) ** (i + 1), 0);
  return x === n ? "Disarium !!" : "Not !!";
}
