/* Digit Racers

Many of the digits, zero through nine showed up for a race one day.
The digit with the most occurences in the input string got 1st place.
The digit that had the second most occurences got 2nd place, and so on it went, possibly all the way to 10th place.
When there were ties, the digit with the largest index in the input string was listed first, 2nd largest index listed next, and so on.
Digits that didnt make it to the race were listed at the bottom in ascending order like this as example "Absent digits: 3, 7".
If none of the digits were absent from the race, the bottom of the winners list would display "All digits present".
The end of each line has a break except for the last.

Example:
Input:
"00009393936611528"

Output:
"1st place: 0
 2nd place: 3, 9
 3rd place: 1, 6
 4th place: 8, 2, 5
 Absent digits: 4, 7"

Notice in the above example, the tied digits are listed in order of larger indexes first.

Input and Output:
input: a string of one or more digits.
output: a string formatted as in the above example.
*/

function digitRacers1(str) {
  const count = {};
  const freq = Array.from({ length: str.length + 1 }, () => []);
  const set = new Set(str);
  const absent = "0123456789".split("").filter((n) => !set.has(n));
  const res = [];

  for (const c of str) {
    count[c] = (count[c] || 0) + 1;
  }
  for (const n in count) {
    freq[count[n]].push(n);
  }

  let rank = 1;

  for (let i = freq.length - 1; i >= 0; i--) {
    if (freq[i].length > 0) {
      const arr = freq[i].sort(
        (a, b) => str.lastIndexOf(b) - str.lastIndexOf(a),
      );
      let suff =
        rank === 1 ? "st" : rank === 2 ? "nd" : rank === 3 ? "rd" : "th";
      let s = `${rank}${suff} place: ${arr.join(", ")}`;
      res.push(s);
      rank++;
    }
  }

  return `${res.join("\n")}\n${absent.length ? "Absent digits: " + absent.join(", ") : "All digits present"}`;
}

function digitRacers2(str) {
  const count = new Array(10).fill(0);
  const lastPos = new Array(10).fill(-1);
  const freq = Array.from({ length: str.length + 1 }, () => []);
  const res = [];

  for (let i = 0; i < str.length; i++) {
    const n = str.charCodeAt(i) - "0".charCodeAt(0);
    count[n]++;
    lastPos[n] = i;
  }

  for (let i = 0; i < count.length; i++) {
    freq[count[i]].push(i);
  }

  const absent = freq[0].length
    ? "Absent digits: " + freq[0].join(", ")
    : "All digits present";
  const ord = (n) => (n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th");
  let place = 1;

  for (let i = freq.length - 1; i >= 1; i--) {
    if (freq[i].length) {
      const arr = freq[i].sort((a, b) => lastPos[b] - lastPos[a]);
      res.push(`${place}${ord(place)} place: ${arr.join(", ")}`);
      place++;
    }
  }

  return res.join("\n") + "\n" + absent;
}
