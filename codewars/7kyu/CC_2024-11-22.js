/* Longest vowel chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

function solve(s){
  const vowels = 'aeiou';
  let max = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      let j = i;
      let seq = 1;
      while (vowels.includes(s[j + 1])) {
        seq++;
        j++;
      }
      i = j;
      max = Math.max(max, seq);
    }
  }
  return max;
}