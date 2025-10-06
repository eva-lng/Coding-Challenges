/* Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples:
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
*/

public class Solution {
  public static String replace(final String s) {
    return s.replaceAll("[aeiouAEIOU]", "!");
  }
}