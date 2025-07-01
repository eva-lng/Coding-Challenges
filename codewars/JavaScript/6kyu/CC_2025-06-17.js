/* Longest 2-character substring

Find the longest substring within a string that contains at most 2 unique characters.

substring("a") => "a"
substring("aaa") => "aaa"
substring("abacd") => "aba"
substring("abacddcd") => "cddcd"
substring("cefageaacceaccacca") => "accacca"

This function will take alphanumeric characters as input.
In cases where there could be more than one correct answer, the first string occurrence should be used. For example, substring('abc') should return 'ab' instead of 'bc'.
Although there are O(N^2) solutions to this problem, you should try to solve this problem in O(N) time. Tests may pass for O(N^2) solutions but, this is not guaranteed.
*/

function substring(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const arr = [];
    for (let j = i; j < str.length; j++) {
      if (!arr.includes(str[j])) arr.push(str[j]);
      if (arr.length > 2) break;
      if (j - i + 1 > res.length) {
        res = str.slice(i, j + 1);
      }
    }
  }
  return res;
}
