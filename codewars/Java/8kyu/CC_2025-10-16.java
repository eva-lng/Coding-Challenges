/* Well of Ideas - Easy Version


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