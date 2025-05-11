/* Sum of Odd Cubed Numbers

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  const isNumeric = arr.every((n) => !isNaN(n));
  return isNumeric
    ? arr.filter((n) => n % 2 !== 0).reduce((a, n) => a + n ** 3, 0)
    : undefined;
}
