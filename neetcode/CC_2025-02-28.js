/* Pascal's Triangle II

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]

Constraints:
0 <= rowIndex <= 33

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

class Solution {
  /**
   * @param {number} rowIndex
   * @return {number[]}
   */

  getRow1(rowIndex) {
    if (rowIndex === 0) return [1];

    let curRow = [1];
    let prevRow = this.getRow1(rowIndex - 1);

    for (let i = 1; i < rowIndex; i++) {
      curRow.push(prevRow[i - 1] + prevRow[i]);
    }

    curRow.push(1);
    return curRow;
  }

  getRow2(rowIndex) {
    const res = Array.from({ length: rowIndex + 1 }, (_, i) =>
      Array(i + 1).fill(1)
    );
    for (let i = 2; i <= rowIndex; i++) {
      for (let j = 1; j < i; j++) {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
    return res[rowIndex];
  }

  getRow3(rowIndex) {
    let res = [1];

    for (let i = 0; i < rowIndex; i++) {
      const nextRow = Array(res.length + 1).fill(0);
      for (let j = 0; j < res.length; j++) {
        nextRow[j] += res[j];
        nextRow[j + 1] += res[j];
      }
      res = nextRow;
    }
    return res;
  }
}
