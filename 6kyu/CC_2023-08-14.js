/* Prize Draw 

*/

function rank(st, we, n) {
  const names = st.split(',');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
  if (!st) return 'No participants';
  if (n > names.length) return 'Not enough participants';
    
  const scores = names.map((name, i) => {
    const score = name.split('').reduce((sum, char) => sum + (alphabet.indexOf(char.toLowerCase()) + 1), 0) + name.length;
    return score * we[i];
  });
    
  const sortedIndices = scores.map((_, i) => i).sort((a, b) => {
    if (scores[a] !== scores[b]) {
      return scores[b] - scores[a];
    } else {
      return names[a].localeCompare(names[b]);
    }
  });
    
  return names[sortedIndices[n - 1]];
}