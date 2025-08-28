/* Invert values 

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
*/

public class Kata {
  public static int[] invert(int[] array) {
    int[] inverted = new int[array.length];
    for (int i = 0; i < array.length; i++) {
      inverted[i] = array[i] * -1;
    }
    return inverted;
  }
}