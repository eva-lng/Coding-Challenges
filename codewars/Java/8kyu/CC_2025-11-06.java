/* Printing Array elements with Comma delimiters

Input: Array of elements
["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
*/

import java.util.Arrays;
import java.util.stream.Collectors;

public class ArrayPrinter {
  public static String printArray(Object[] array) {
    return Arrays.stream(array).map(x -> x.toString()).collect(Collectors.joining(","));
  }
}