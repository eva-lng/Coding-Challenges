/* Path Crossing

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

Example 1:
Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.

Example 2:
Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.

Constraints:
1 <= path.length <= 104
path[i] is either 'N', 'S', 'E', or 'W'.
*/

class Solution {
  /**
   * @param {string} path
   * @return {boolean}
   */

  isPathCrossing(path) {
    const points = new Set();
    points.add("0, 0");
    let x = 0;
    let y = 0;

    for (let dir of path) {
      if (dir === "N") y++;
      else if (dir === "S") y--;
      else if (dir === "E") x++;
      else if (dir === "W") x--;

      if (points.has(`${x}, ${y}`)) return true;
      points.add(`${x}, ${y}`);
    }
    return false;
  }
}
