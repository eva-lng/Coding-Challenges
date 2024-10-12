/* Disemvowel Trolls

Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.*/

// Solution 1
function disemvowel1(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}
// Solution 2
function disemvowel2(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
      str = str.replace(str[i], '');
    }
  }
  return str;
}