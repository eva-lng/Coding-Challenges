/* Be Concise IV - Index of an element in an array

Provided is a function which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the character count requirements of the Kata.

You may assume that all array elements are unique.

The character limit is 161 (Java).
*/

class Solution {
  static String kata(String[] a, String s) {
	  int i = java.util.Arrays.asList(a).indexOf(s);
    return i < 0 ? "Not found" : i + "";
	}
}