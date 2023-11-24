/* Reverse or rotate?


*/

function revrot(str, sz) {
  if (!str || sz <= 0 || sz > str.length) return '';
  const newLenStr = str.slice(0, str.length - (str.length % sz));
  const result = [];
  
  for (let i = 0; i < newLenStr.length; i+= sz) {
    const chunk = newLenStr.slice(i, i + sz).split('');
    const sum = chunk.reduce((acc, n) => acc + (n ** 3), 0);
    if (sum % 2 === 0) {
      result.push(chunk.reverse().join(''));
    } else {
      const first = chunk.shift();
      chunk.push(first);
      result.push(chunk.join(''));
    }
  }
  return result.join('');
}