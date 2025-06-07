/* Read the time


*/
function solve(time) {
  const hash = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "half",
    0: "midnight",
  };
  if (time === "00:00") return "midnight";

  const arr = time.split(":").map(Number);
  const h = hToText(arr);
  const min = minToText(arr[1]);

  function hToText(a) {
    const num = arr[1] > 30 ? a[0] + 1 : a[0];
    return num === 12 ? hash[num] : hash[num % 12];
  }

  function minToText(n) {
    let num = n > 30 ? 60 - n : n;
    let glue = n > 30 ? "to" : "past";
    let min = num === 1 ? "minute" : "minutes";

    if (num === 0) return "o'clock";
    else if (num === 15 || num === 30) {
      return hash[num] + " " + glue;
    } else if (num < 21) {
      return `${hash[num]} ${min} ${glue}`;
    } else {
      const secNum = num.toString().slice(-1);
      return `twenty ${hash[secNum]} ${min} ${glue}`;
    }
  }

  if (arr[1] === 0) return h + " " + min;
  else return min + " " + h;
}
