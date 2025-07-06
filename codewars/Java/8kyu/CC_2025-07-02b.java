/* Reversed Strings


*/

public class Kata {

  public static String solution1(String str) {
    return new StringBuilder(str).reverse().toString();
  }

  public static String solution2(String str) {
    String res = "";
    for (int i = 0; i < str.length(); i++) {
      res = str.charAt(i) + res;
    }
    return res;
  }

}