/* Sequential Digits

An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

Example 1:
Input: low = 100, high = 300
Output: [123,234]

Example 2:
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]

Constraints:
10 <= low <= high <= 10^9
*/

class Solution {
  /**
   * @param {number} low
   * @param {number} high
   * @return {number[]}
   */

  // brute force
  sequentialDigits1(low, high) {
    const res = [];

    for (let num = low; num <= high; num++) {
      const str = num.toString();
      let flag = true;
      for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) !== 1) {
          flag = false;
          break;
        }
      }
      if (flag) res.push(num);
    }
    return res;
  }

  // simulation
  sequentialDigits2(low, high) {
    const res = [];
    const lowDigit = low.toString().length;
    const highDigit = high.toString().length;

    for (let digits = lowDigit; digits <= highDigit; digits++) {
      for (let start = 1; start < 10; start++) {
        if (start + digits > 10) break;
        let num = start;
        let prev = start;
        for (let i = 1; i < digits; i++) {
          num = num * 10 + ++prev;
        }
        if (num >= low && num <= high) {
          res.push(num);
        }
      }
    }
    return res;
  }
}
