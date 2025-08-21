/* Convert number to reversed array of digits 

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/

public class Kata {
  public static int[] digitize1(long n) {
    String reversed = new StringBuilder(String.valueOf(n)).reverse().toString();
    int[] res = new int[reversed.length()];
    for (int i = 0; i < reversed.length(); i++) {
      res[i] = Character.getNumericValue(reversed.charAt(i));
    }
    return res;
  }

  public static int[] digitize2(long n) {
    String[] strArr = String.valueOf(n).split("");
    int[] res = new int[strArr.length];
    for (int i = 0; i < res.length; i++) {
      res[i] = Integer.valueOf(strArr[strArr.length - 1 - i]);
    }
    return res;
  }
}