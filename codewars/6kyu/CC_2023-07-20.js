/*  longest_palindrome

*/

function longestPalindrome(s){
  let longest = 0;
  for (let i = 0; i < s.length; i++){
    for (let j = i + 1; j <= s.length; j++) {
      let sub = s.slice(i, j);
      if (sub === sub.split(''). reverse().join('')) {
        longest = Math.max(longest, sub.length);
      }
    }
  }
  return longest;
}