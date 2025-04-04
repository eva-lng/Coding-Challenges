/* 554. Brick Wall

There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.

Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.

Example 1:
Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
Output: 2

Example 2:
Input: wall = [[1],[1],[1]]
Output: 3

Constraints:
n == wall.length
1 <= n <= 10^4
1 <= wall[i].length <= 10^4
1 <= sum(wall[i].length) <= 2 * 10^4
sum(wall[i]) is the same for each row i.
1 <= wall[i][j] <= 2^31 - 1
*/

class Solution {
  /**
   * @param {number[][]} wall
   * @return {number}
   */

  // hash map
  leastBricks1(wall) {
    const countGap = new Map();
    countGap.set(0, 0);

    for (const row of wall) {
      let total = 0;
      for (let i = 0; i < row.length - 1; i++) {
        total += row[i];
        countGap.set(total, (countGap.get(total) || 0) + 1);
      }
    }

    return wall.length - Math.max(...countGap.values());
  }

  // brute force
  leastBricks2(wall) {
    const n = wall.length;
    let m = 0;
    for (const brick of wall[0]) {
      m += brick;
    }

    const gaps = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
      let gap = 0;
      for (const brick of wall[i]) {
        gap += brick;
        gaps[i].push(gap);
      }
    }

    let res = n;
    for (let line = 1; line < m; m++) {
      let cuts = 0;
      for (let i = 0; i < n; i++) {
        if (!gaps[i].includes(line)) {
          cuts++;
        }
      }
      res = Math.min(cuts, res);
    }

    return res;
  }
}
