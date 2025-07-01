/* Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer. You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let num = args[0];
    for (let i = 0; i < args.length; i++){
      if (args[i] < num) {
        num = args[i];
      }
    }
    return num;
  }
}