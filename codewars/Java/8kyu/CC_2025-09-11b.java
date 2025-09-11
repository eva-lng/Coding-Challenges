/* Array plus array

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

import java.util.Arrays;
import java.util.stream.IntStream;

public class Sum1 {
  public static int arrayPlusArray(int[] arr1, int[] arr2) {
    return IntStream.concat(Arrays.stream(arr1), Arrays.stream(arr2)).sum();
  }
}

public class Sum2 {
  public static int arrayPlusArray(int[] arr1, int[] arr2) {
    return Arrays.stream(arr1).sum() + Arrays.stream(arr2).sum();
  }
}