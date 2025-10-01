/* Find Multiples of a Number

In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

It is guaranteed that n > 0 and limit >= n.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

Examples:
n = 2; limit = 6 --> [2, 4, 6]
n = 2; limit = 5 --> [2, 4]
*/

import java.util.stream.IntStream;

public class Multiples1 {
  public static int[] find(int base, int limit) {
    return IntStream.rangeClosed(base, limit).filter(n -> n % base == 0).toArray();
  }
}

public class Multiples2 {
  public static int[] find(int base, int limit) {
    int[] arr = new int[(int) limit / base];
    for (int i = 0; i < arr.length; i++) {
      arr[i] = base * (i + 1);
    }
    return arr;
  }
}