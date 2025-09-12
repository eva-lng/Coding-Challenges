/* Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

import java.util.*;

public class ReverseWords {
  public static String reverseWords(String str) {
    List<String> words = Arrays.asList(str.split(" "));
    Collections.reverse(words);
    return String.join(" ", words);
  }
}