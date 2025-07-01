/* Sorted? yes? no? how?

Complete the method which accepts an array of integers, and returns one of the following:
- "yes, ascending" - if the numbers in the array are sorted in an ascending order
- "yes, descending" - if the numbers in the array are sorted in a descending order
- "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
  return array.every((el, i, a) => i == 0 || a[i] >= a[i-1]) ? 'yes, ascending'
    : array.every((el, i, a) => i == 0 || a[i] <= a[i-1]) ? 'yes, descending' : 'no';
}