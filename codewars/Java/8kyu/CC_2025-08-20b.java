/* Beginner - Lost Without a Map 

Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

public class Maps {
  public static int[] map(int[] arr) {
    int[] res = new int[arr.length];
    for (int i = 0; i < arr.length; i++) {
      res[i] = arr[i] * 2;
    }
    return res;
  }
}