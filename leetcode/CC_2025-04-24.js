/* 2418. Sort the People

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

Example 1:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

Constraints:
n == names.length == heights.length
1 <= n <= 10^3
1 <= names[i].length <= 20
1 <= heights[i] <= 10^5
names[i] consists of lower and upper case English letters.
All the values of heights are distinct.
*/

class Solution {
  /**
   * @param {string[]} names
   * @param {number[]} heights
   * @return {string[]}
   */

  // hash map
  sortPeople1(names, heights) {
    const map = {};
    const res = [];

    for (let i = 0; i < heights.length; i++) {
      map[heights[i]] = names[i];
    }

    heights.sort((a, b) => b - a);

    for (let i = 0; i < heights.length; i++) {
      res.push(map[heights[i]]);
    }

    return res;
  }

  // pairs sorting
  sortPeople2(names, heights) {
    const arr = names.map((name, i) => [heights[i], name]);
    arr.sort((a, b) => b[0] - a[0]);
    return arr.map((el) => el[1]);
  }

  // indices sort
  sortPeople3(names, heights) {
    const indices = names.map((_, i) => i);
    indices.sort((a, b) => heights[b] - heights[a]);
    return indices.map((i) => names[i]);
  }
}
