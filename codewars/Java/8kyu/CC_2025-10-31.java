/* Sum of Multiples

Find the sum of all multiples of n below m

Keep in Mind:
- n and m should be natural numbers (positive integers). Otherwise, see the examples in your language about how to handle invalid input values.
- m is excluded from the multiples

Examples:
Kata.sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
Kata.sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
Kata.sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
Kata.sumMul(4, -7)  // throws IllegalArgumentException
*/

public class Kata {
  public static long sumMul(int n, int m) {
    if (n <= 0 || m <= 0) throw new IllegalArgumentException("Invalid argument");
    int sum = 0;
    for (int i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
  }
}