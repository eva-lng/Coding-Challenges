/* Number , number ... wait LETTER !

Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. Each number has a single alphabet letter somewhere within it.
Example : "24z6 1x23 y369 89a 900b"

As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.
Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)

Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.
- The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
- This has to work for any size of numbers sent in (after division, go back to addition, etc).
- In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
- Remember to also round the final answer to the nearest integer.

Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60
*/

function doMath(string) {
  const sorted = string.split(" ").sort((a, b) => {
    const letterA = findLetter(a);
    const letterB = findLetter(b);
    return letterA.localeCompare(letterB);
  });
  const nums = sorted.map((str) => parseInt(removeLetter(str)));
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (i % 4 === 1) res += nums[i];
    else if (i % 4 === 2) res -= nums[i];
    else if (i % 4 === 3) res *= nums[i];
    else if (i % 4 === 0) res /= nums[i];
  }
  return Math.round(res);
}

function isLetter(c) {
  return (
    c.toLowerCase().charCodeAt(0) >= 97 && c.toLowerCase().charCodeAt(0) <= 122
  );
}

function findLetter(str) {
  for (const c of str) {
    if (isLetter(c)) return c;
  }
}

function removeLetter(str) {
  let res = "";
  for (const c of str) {
    if (!isLetter(c)) res += c;
  }
  return res;
}
