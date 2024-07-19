/* Find Nearest square number

Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
*/

function nearestSq(n){
  const sqrtN = Math.sqrt(n);
  const lowerSq = Math.floor(sqrtN) ** 2;
  const upperSq = Math.ceil(sqrtN) ** 2;
  
  return n - lowerSq < upperSq - n ? lowerSq : upperSq;
}