/* Sum of a Sequence [Hard-Core Version]

The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter:
sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4

If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. See the provided test cases for further examples :)
Note: Larger ranges are going to be tested, so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.
*/

function sequenceSum(begin, end, step) {
  const steps = Math.floor((end - begin) / step);
  return (end - begin) * step > 0
    ? (step + step * steps) / 2 * steps + (steps + 1) * begin
    : 0;
}