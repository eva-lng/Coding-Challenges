/* Repeated Substring

For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return:
an array [t, k]

Examples:
"ababab" ---> (t = "ab", k = 3)

"abcde" ---> (t = "abcde", k = 1)
because for this string, the minimum substring 't'
such that 's' is 'k' times 't', is 's' itself.
*/

function f(s) {
  for (let i = 1; i <= s.length; i++) {
    if (s.length % i === 0) {
      const t = s.slice(0, i);
      const k = s.length / i;

      if (t.repeat(k) === s) {
        return [t, k];
      }
    }
  }
  return [s, 1];
}
