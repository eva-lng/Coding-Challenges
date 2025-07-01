/* Simple time difference

In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.

In the second example, the alarm sounds 4 times in a day.
*/

function solve(arr) {
  const a = [...new Set(arr.sort()), arr[0]];
  const minutes = a.map((t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  });
  let maxDif = 0;

  for (let i = 0; i < minutes.length - 1; i++) {
    const curr = minutes[i] + 1;
    const next = minutes[i + 1];
    if (curr > next) {
      maxDif = Math.max(maxDif, 1440 - curr + next);
    } else {
      maxDif = Math.max(maxDif, next - curr);
    }
  }
  return minToTime(maxDif);
}

function minToTime(n) {
  const hrs = Math.floor(n / 60);
  const min = n % 60;
  return `${hrs < 10 ? "0" + hrs : hrs}:${min < 10 ? "0" + min : min}`;
}
