/* Colorful Number

Determine whether a non-negative integer number is colorful or not.

263 is a colorful number because [2, 6, 3, 2*6, 6*3, 2*6*3] are all different; whereas
236 is not colorful, because [2, 3, 6, 2*3, 3*6, 2*3*6] has 6 twice.

So take all consecutive subsets of digits, take their products, and ensure all the products are different.

Examples:
263  -->  true
236  -->  false
*/

function colourful(number) {
  const arr = number.toString().split("");
  const products = new Set();

  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = i; j < arr.length; j++) {
      prod *= arr[j];
      if (products.has(prod)) return false;
      products.add(prod);
    }
  }
  return true;
}
