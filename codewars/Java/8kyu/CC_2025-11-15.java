/* Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example:
[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0
*/

import java.util.Arrays;

public class ZywOo1 {
  public static int sumOfDifferences(int[] arr) {
    if (arr.length <= 1) return 0;
    
    int min = arr[0];
    int max = arr[0];
    
    for (int num : arr) {
      if (num > max) max = num;
      if (num < min) min = num;
    }
    
    return max - min;
  }
}

public class ZywOo2 {
  public static int sumOfDifferences(int[] arr) {
    Arrays.sort(arr);
    return arr.length <= 1 ? 0 : arr[arr.length - 1] - arr[0];
  }
}