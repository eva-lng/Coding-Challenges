/* CSV representation of array

Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

Array's length > 2.

Note: you shouldn't escape the \n, it should work as a new line.
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