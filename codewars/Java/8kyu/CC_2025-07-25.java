/* Calculate average

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

public class Kata {
  public static double findAverage(int[] array) {
    int sum = 0;
    for (int num: array) {
      sum += num;
    }
    return (double) sum / array.length;
  }
}