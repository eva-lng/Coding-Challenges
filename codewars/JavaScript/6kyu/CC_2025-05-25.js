/* Simple Fun #250: Prefix Sums To Suffix Sums

Given the prefix sums of some array A, return suffix sums for the same array.

Array of prefix sums is defined as:
B[0] = A[0]
B[1] = A[0] + A[1]
B[2] = A[0] + A[1] + A[2]
...
B[n - 1] = A[0] + A[1] + ... + A[n - 1]

Array of suffix sums is defined as:
B[0] = A[0] + A[1] + A[2] + ... + A[n - 1]
B[1] =        A[1] + A[2] + ... + A[n - 1]
...
B[n - 2] =             A[n - 2] + A[n - 1]
B[n - 1] =                        A[n - 1]

Input/Output:
[input] integer array prefixSums
prefix sums of the orginal array.
1 ≤ prefixSums.length ≤ 10^4,
-10^5 ≤ prefixSums[i] ≤ 10^5.

[output] an integer array
suffix sums of the orginal array.

Example:
For prefixSums = [1, 3, 6, 10, 15],
the output should be [15, 14, 12, 9, 5].
You may verify that the initial array A is [1, 2, 3, 4, 5] (just try to calculate the prefix sums of it).
Then following the rules, you can calculate the suffix sums of A.
*/

function prefixSumsToSuffixSums(prefixSums) {
  const arr = [prefixSums[0]];
  for (let i = 1; i < prefixSums.length; i++) {
    arr.push(prefixSums[i] - prefixSums[i - 1]);
  }
  return suffixSums(arr);
}

function suffixSums(arr) {
  const res = [arr.reduce((a, b) => a + b, 0)];
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(res[i] - arr[i]);
  }
  return res;
}
