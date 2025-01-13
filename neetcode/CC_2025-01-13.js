/* Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30 
*/

class Solution {
  /**
   * @param {number} numRows
   * @return {number[]}
   */

  generate(numRows) {
    const res = [[1]];

    for (let i = 0; i < numRows - 1; i++) {
      const dummyRow = [0, ...res[res.length - 1], 0];
      const row = [];

      for (let j = 0; j < dummyRow.length - 1; j++) {
        row.push(dummyRow[j] + dummyRow[j + 1]);
      }
      res.push(row);
    }
    return res;
  }
}
