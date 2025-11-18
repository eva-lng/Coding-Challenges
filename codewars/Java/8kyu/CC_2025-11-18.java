/* CSV representation of array


*/

import java.util.Arrays;
import java.util.stream.Collectors;

public class Kata1 {
  public static String toCsvText(int[][] array) {
    return Arrays.stream(array)
              .map(arr -> Arrays.stream(arr)
                  .mapToObj(i -> i + "")
                  .collect(Collectors.joining(",")))
              .collect(Collectors.joining("\n"));
  }
}

public class Kata2 {
  public static String toCsvText(int[][] array) {
    StringBuilder sb = new StringBuilder();
    
    for (int i = 0; i < array.length; i++) {
      for (int j = 0; j < array[i].length; j++) {
        sb.append(array[i][j]);
        if (j < array[i].length - 1) {
          sb.append(",");
        }
      }
      if (i < array.length - 1) {
        sb.append("\n");
      }
    }
    
    return sb.toString();
  }
}