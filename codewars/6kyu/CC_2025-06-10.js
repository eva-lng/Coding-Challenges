/* The maximum and minimum difference -- Simple version


*/

function maxAndMin(arr1, arr2) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const diff = Math.abs(arr1[i] - arr2[j]);
      min = Math.min(min, diff);
      max = Math.max(max, diff);
    }
  }
  return [max, min];
}
