/* T.T.T.17: Split odd and even

Complete function splitOddAndEven, accept a number n(n>0), return an array that contains the continuous parts of odd or even digits.

Please don't worry about digit 0, it won't appear ;-)

Examples:
splitOddAndEven(123)  ===  [1,2,3]
splitOddAndEven(223)  ===  [22,3]
splitOddAndEven(111)  ===  [111]
splitOddAndEven(13579)  ===  [13579]
splitOddAndEven(135246)  ===  [135,246]
splitOddAndEven(123456)  ===  [1,2,3,4,5,6]
*/

function splitOddAndEven(n) {
  const str = n.toString();
  let prev = str[0];
  const res = [];

  for (let i = 1; i < str.length; i++) {
    if (+str[i] % 2 === +str[i - 1] % 2) {
      prev += str[i];
    } else {
      res.push(+prev);
      prev = str[i];
    }
  }

  res.push(+prev);
  return res;
}
