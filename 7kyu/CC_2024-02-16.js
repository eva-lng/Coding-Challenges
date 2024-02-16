/* Remove duplicate words

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

// solution 1
function removeDuplicateWords1(s) {
  return [...new Set(s.split(' '))].join(' ');
}

// solution 2
function removeDuplicateWords2(s) {
  const res = [];
  s.split(' ').forEach(word => {
    if (!res.includes(word)) {
      res.push(word);
    }
  })
  return res.join(' ');
}