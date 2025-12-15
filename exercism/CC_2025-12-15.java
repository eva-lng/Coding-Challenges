/* Reverse String

Your task is to reverse a given string.

Some examples:
Turn "stressed" into "desserts".
Turn "strops" into "sports".
Turn "racecar" into "racecar".
*/

class ReverseString {
  String reverse(String inputString) {
    return new StringBuilder(inputString).reverse().toString();
  }
}