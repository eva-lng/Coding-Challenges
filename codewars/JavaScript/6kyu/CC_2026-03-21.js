/* Common array elements

Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:
common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
*/

function common(a, b, c) {
  const count = (arr) => {
    const map = {};
    for (const num of arr) {
      map[num] = (map[num] || 0) + 1;
    }
    return map;
  };

  let sum = 0;
  const countA = count(a);
  const countB = count(b);
  const countC = count(c);

  for (const num in countA) {
    if (countB[num] && countC[num]) {
      const min = Math.min(countA[num], countB[num], countC[num]);
      sum += min * Number(num);
    }
  }

  return sum;
}
