/* Math Issues

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:
Math.round()
Math.ceil()
Math.floor()
*/

Math.round = function(n) {
  return (n + 0.5) - (n + 0.5) % 1;
};

Math.ceil = function(n) {
  return n - n % 1 + (n % 1 === 0 ? 0 : 1);
};

Math.floor = function(n) {
  return n - n % 1;
};