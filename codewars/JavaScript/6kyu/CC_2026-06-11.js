/* Are all elements equal?

Create (a) method(s) eqAll that determines if all elements of a list are equal.
list can be a String or an Array; return value is a Boolean.
Your method(s) should not be enumerable. Equality should be strict (===).

Examples:
"aaaaa".eqAll() => true
"abcde".eqAll() => false
[0,0,0].eqAll() => true
[0,1,2].eqAll() => false

"".eqAll() => true
[].eqAll() => true
*/

Object.defineProperty(String.prototype, "eqAll", {
  value: function eqAll() {
    return new Set(this).size <= 1;
  },
});

Object.defineProperty(Array.prototype, "eqAll", {
  value: function eqAll() {
    return this.every((el) => el === this[0]);
  },
});
