/* Clock in Mirror

Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22 he knows that the time is 11:38.

in the same manner:
05:25 --> 06:35
01:50 --> 10:10
11:58 --> 12:02
12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string. Return the real time as a string.

Consider hours to be between 1 <= hour < 13.
So there is no 00:20, instead it is 12:20.
There is no 13:20, instead it is 01:20.
*/

function WhatIsTheTime(timeInMirror) {
  const mirrMins = Number(timeInMirror.split(':')[1]);
  const mirrHrs = Number(timeInMirror.split(':')[0]);
  
  let mins = mirrMins == 0 || mirrMins == 30 ? mirrMins : 60 - mirrMins;
  let hrs;
  
  if (mirrMins == 0) {
    hrs = 12 - mirrHrs == 0 ? 12 : 12 - mirrHrs;
  } else {
    if (mirrHrs == 11) hrs = 12;
    else if (mirrHrs == 12) hrs = 11;
    else hrs = 12 - mirrHrs - 1;
  }
  
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}