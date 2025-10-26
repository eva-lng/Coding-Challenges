/* Enumerable Magic #25 - Take the First N Elements

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

import java.util.Arrays;

public class ZywOo {
  public static int[] take(int[] arr, int n) {
    return n > arr.length ? arr : Arrays.copyOf(arr, n);
  }
}