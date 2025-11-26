/* Return the first M multiples of N 

Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.:
(3, 5.0) --> [5.0, 10.0, 15.0]
*/

import java.util.stream.IntStream;

public class Kata1 {
  public static int[] multiples(int m, int n) {
    return IntStream.rangeClosed(1, m).map(x -> x * n).toArray();
  }
}

public class Kata2 {
  public static int[] multiples(int m, int n) {
    int[] res = new int[m];
    
    for (int i = 1; i <= m; i++) {
      res[i - 1] = n * i;
    }
    
    return res;
  }
}