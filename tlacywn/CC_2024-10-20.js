/* Two Crystal Balls 

Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in hich it will break in the most optimized way.
The function accepts an array of false/true values depending on whether the crystal ball breaks (true) when dropped at that distance or not (false).
*/

function two_crystal_balls(breaks) {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}