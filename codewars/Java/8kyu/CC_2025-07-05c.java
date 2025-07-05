/* String repeat 

Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output):
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

public class Solution {
  public static String repeatStr1(final int rep, final String str) {
    return str.repeat(rep);
  }
  
  public static String repeatStr2(final int rep, final String str) {
    String res = "";
    for (int i = 0; i < rep; i++) {
      res += str;
    }
    return res;
  }
}