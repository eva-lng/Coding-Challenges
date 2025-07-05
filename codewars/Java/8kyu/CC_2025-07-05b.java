/* Convert a Number to a String!

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

class Kata {
  public static String numberToString1(int num) {
    return String.valueOf(num);
  }

  public static String numberToString2(int num) {
    return Integer.toString(num);
  }

  public static String numberToString3(int num) {
    return "" + num;
  }
}