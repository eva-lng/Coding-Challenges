/*  Round by 0.5 steps

Round any given number to the closest 0.5 step.

I.E.:
solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5

Round up if number is as close to previous and next 0.5 steps:
solution(4.75) == 5
*/

function solution(n){
  const dec = n - Math.floor(n)
  if (dec < 0.25) return Math.floor(n)
  else if (dec >= 0.25 && dec < 0.75) return Math.floor(n) + 0.5
  else return Math.ceil(n)
}