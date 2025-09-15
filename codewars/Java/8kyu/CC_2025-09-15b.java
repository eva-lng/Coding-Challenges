/* Removing Elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

import java.util.*;

public class Kata1 {
  public static Object[] removeEveryOther(Object[] arr) {
    List<Object> list = new ArrayList<>();
    for (int i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        list.add(arr[i]);
      }
    }
    return list.toArray();
  }
}

public class Kata2 {
  public static Object[] removeEveryOther(Object[] arr) {
    Object[] res = new Object[(arr.length + 1) / 2];
    for (int i = 0; i < res.length; i++) {
      res[i] = arr[i * 2];
    }
    return res;
  }
}