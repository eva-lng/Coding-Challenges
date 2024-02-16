/* Remove duplicate words


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