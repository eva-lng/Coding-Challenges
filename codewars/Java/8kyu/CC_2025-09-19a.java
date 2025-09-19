/* What is between?

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:
a = 1
b = 4
--> [1, 2, 3, 4]
*/

import java.util.stream.IntStream;

public class Kata1 {
  public static int[] between(int a, int b) {
    return IntStream.rangeClosed(a, b).toArray();
  }
}

public class Kata2 {
  public static int[] between(int a, int b) {
    int[] res = new int[b - a + 1];
    for (int i = a; i <= b; i++) {
      res[i - a] = i;
    }
    return res;
  }
}