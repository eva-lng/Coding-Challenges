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

function f1(s) {
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

// KMP algo
function f2(s) {
  const lps = new Array(s.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < s.length) {
    if (s[i] === s[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  const longestPrefixSuffix = lps[s.length - 1];
  const patternLength = s.length - longestPrefixSuffix;
  if (s.length % patternLength === 0) {
    return [s.slice(0, patternLength), s.length / patternLength];
  }

  return [s, 1];
}
