/* Scrabble best word

You're playing to scrabble. But counting points is hard. You decide to create a little script to calculate the best possible value.

The function takes two arguments :
`points` : an array of integer representing for each letters from A to Z the points that it pays
`words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.
If the length and the score are the same for two elements, return the index of the first one.
*/

function getBestWord(points,words){
  let maxScore = 0;
  let word = '';
  
  const scores = words.map(word => word
                           .split('')
                           .map(el => points[el.charCodeAt(0) - 65])
                           .reduce((acc, n) => acc + n, 0));
  
  scores.forEach((n, i) => {
    if (n > maxScore) {
      maxScore = n;
      word = words[i];
    } else if (n === maxScore && words[i].length < word.length) {
      word = words[i];
    }
  })
  
  return words.indexOf(word);
}