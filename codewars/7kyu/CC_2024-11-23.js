/* 


*/

function wordValue1(a) {
  return a.map((s, i) => countVal(s) * (i + 1));
}

function countVal(str) {
  let sum = 0;
  for (let c of str) {
    if (c !== ' '){
      sum += c.charCodeAt() - 96; 
    }
  }
  return sum;
}

function wordValue2(a) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return a.map((s, i) => (
    (i + 1) * [...s].reduce((sum, c) => sum + 1 + chars.indexOf(c), 0)
  ));
}