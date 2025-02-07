/* Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
*/

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */

  //two pointers
  backspaceCompare1(s, t) {
    function getNextValidCharIdx(str, end) {
      let delCount = 0;
      while (end >= 0) {
        if (str[end] === "#") {
          delCount++;
        } else if (count > 0) {
          delCount--;
        } else {
          break;
        }
        end--;
      }
      return end;
    }

    let sp = s.length - 1;
    let tp = t.length - 1;

    while (sp >= 0 || tp >= 0) {
      sp = getNextValidCharIdx(s, sp);
      tp = getNextValidCharIdx(t, tp);

      if (sp < 0 && tp < 0) {
        return true;
      } else if (sp < 0 || tp < 0) {
        return false;
      } else if (s[sp !== t[tp]]) {
        return false;
      }

      sp--;
      tp--;
    }

    return true;
  }

  // stack
  backspaceCompare2(s, t) {
    function removeChars(str) {
      const stack = [];

      for (let ch of str) {
        if (ch === "#") {
          stack.pop();
        } else {
          stack.push(ch);
        }
      }
      return stack.join("");
    }

    return removeChars(s) === removeChars(t);
  }
}
