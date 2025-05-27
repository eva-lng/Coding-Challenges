/* Numbers of Letters of Numbers

If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

Examples:
numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"]
*/

function numbersOfLetters1(integer) {
  const chars = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero",
  };
  let num = integer;
  let str = "";
  const res = [];

  while (true) {
    str = num
      .toString()
      .split("")
      .map((n) => chars[n])
      .join("");
    res.push(str);
    if (num === str.length) break;
    num = str.length;
  }
  return res;
}

function numbersOfLetters2(integer) {
  const chars = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let str = "a".repeat(integer);
  const res = [];

  while (str !== chars[str.length]) {
    str = (str.length + "")
      .split("")
      .map((n) => chars[n])
      .join("");
    res.push(str);
  }
  return res;
}
