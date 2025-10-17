/* No zeros for heroes

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0

Note: Zero should be left as it is.
*/

public class NoBoring {
  public static int noBoringZeros(int n) {
    if (n == 0 || n % 10 != 0) return n;
    return noBoringZeros(n / 10);
  }
}