/* Well of Ideas - Easy Version

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

import java.util.Arrays;

public class Kata1 {
  public static String well(String[] x) {
    long good = Arrays.stream(x).filter(el -> el.equals("good")).count();
    return good > 2 ? "I smell a series!" : good > 0 ? "Publish!" : "Fail!";
  }
}

public class Kata2 {
  public static String well(String[] x) {
    int good = 0;
    for (String word : x) {
      if (word.equals("good")) good++;
    }
    return good < 1 ? "Fail!" : good < 3 ? "Publish!" : "I smell a series!";
  }
}