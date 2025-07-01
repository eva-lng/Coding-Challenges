/* Slice the middle of a list backwards

Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.
*/

function reverseMiddle(arr){
  const mid = Math.floor(arr.length / 2);
  const start = mid - 1;
  const end = arr.length % 2 === 0 ? mid + 1 : mid + 2;

  return arr.slice(start, end).reverse();
}