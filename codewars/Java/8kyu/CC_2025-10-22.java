/* Find the position!

When provided with a letter, return its position in the alphabet.

Input: "a"

Output: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/

public class Kata {
  public static String position(char alphabet) {
    return "Position of alphabet: " + ((int) alphabet - 96);
  }
}