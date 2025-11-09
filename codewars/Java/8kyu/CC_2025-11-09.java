/* Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
*/

import java.util.List;
import java.util.ArrayList;

public class VowelMapper {
  public static List<Object> isVow(List<Integer> a) {
    List<Character> vowels = List.of('a', 'e', 'i', 'o', 'u');
    List<Object> res = new ArrayList<>(a.size());
    
    for (Integer num : a) {
      char ch = (char) num.intValue();
      if (vowels.contains(ch)) {
        res.add(String.valueOf(ch));
      } else {
        res.add(num);
      }
    }
    
    return res;
  }
}