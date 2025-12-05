/* Center of the Matrix

Create a method that returns the center of a 2-dim array.

It should return null if there is no single center element.

You can assume all inputs will be rectangular matricies in array form. ex: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
*/

public class Kata {
  public static Integer center(int[][] matrix) {
    if (matrix.length == 0) return null;
    
    int x = matrix.length;
    int y = matrix[0].length;
    
    return (x % 2 != 0) && (y % 2 != 0) ? matrix[x/2][y/2] : null;
  }
}