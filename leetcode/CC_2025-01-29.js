/* 


*/

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */

  maxScore(s) {
    let totalOnes = 0,
      onesCount = 0,
      zerosCount = 0,
      max = -Infinity;

    for (let n of s) {
      if (n === "1") totalOnes++;
    }

    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === "1") onesCount++;
      else if (s[i] === "0") zerosCount++;
      const curr = zerosCount + (totalOnes - onesCount);
      max = Math.max(max, curr);
    }
    return max;
  }
}
