/* You only need one - Beginner

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/

import java.util.Arrays;

public class Solution {
  public static boolean check1(Object[] a, Object x) {
    for (Object o: a) {
      if (o.equals(x)) return true;
    }
    return false;
  }

  public static boolean check2(Object[] a, Object x) {
    return Arrays.asList(a).contains(x);
  }
}