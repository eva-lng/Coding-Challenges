/* Interweaving strings and removing digits

Your friend Rick is trying to send you a message, but he is concerned that it would get intercepted by his partner. He came up with a solution:

Add digits in random places within the message.
Split the resulting message in two. He wrote down every second character on one page, and the remaining ones on another. He then dispatched the two messages separately.

Write a function interweave(s1, s2) that reverses this operation to decode his message!

Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"

Rick's a bit peculiar about his formats. He would feel ashamed if he found out his message led to extra white spaces hanging around the edges of his message...
*/

function interweave(s1, s2) {
  const isDigit = '0123456789';
  let result = '';
  
  for (let i = 0; i < s1.length; i++) {
    let char1 = '';
    let char2 = '';
    if (s1[i] && !isDigit.includes(s1[i])) {
      char1 += s1[i];
    }
    if (s2[i] && !isDigit.includes(s2[i])) {
      char2 += s2[i];
    }
    result += char1 + char2;
  }
  
  return result;
}