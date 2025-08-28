/* Beginner - Reduce but Grow 

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

public class Kata {
  public static int grow(int[] x) {
    int res = 1;
    for (int n: x) {
      res *= n;
    }
    return res;
  }
}