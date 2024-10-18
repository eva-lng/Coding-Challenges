/* Binary search

Implement binary search. The function accepts an ordered array and a search number, it returns a boolean.
*/

function bs_list(haystack, needle) {
  let low = 0;
  let high = haystack.length;

  do {
    const mid = Math.floor(low + (high - low) / 2);
    const val = haystack[mid];

    if (val === needle) {
      return true;
    } else if (val > needle) {
      high = mid;
    } else {
      low = mid + 1;
    }
  } while (low < high);
  
  return false;
}