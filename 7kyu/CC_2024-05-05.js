/* Least Larger

Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes:
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example:
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

function leastLarger(a,i) {
  let leastLargerIdx = -1;
  
  for (let j = 0; j < a.length; j++) {
    if (a[j] > a[i] && (leastLargerIdx === -1 || a[j] < a[leastLargerIdx])) {
      leastLargerIdx = j;
    }
  }
  return leastLargerIdx;
}