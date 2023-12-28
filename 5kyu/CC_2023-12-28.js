/* The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples:
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  if (!str) return false;
  const arr = str
    .trim().split(' ')
    .filter(el => el)
    .map(el => el[0].toUpperCase() + el.slice(1).toLowerCase());
  if (!arr.length) {
    return false;
  }
  const hash = ['#', ...arr].join('');
  return hash.length > 140 ? false : hash;
}