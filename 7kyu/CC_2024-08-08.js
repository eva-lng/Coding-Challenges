/* Simple remove duplicates


*/

// solution 1
function solve1(arr) {
  return [...new Set(arr.reverse())].reverse();
}

// solution 2
function solve2(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }
  return result;
}

// solution 3
function solve3(arr) {
  return arr.filter((n, i) => arr.lastIndexOf(n) === i);
}