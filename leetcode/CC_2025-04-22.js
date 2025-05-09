/* 884. Uncommon Words from Two Sentences

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Explanation:
The word "sweet" appears only in s1, while the word "sour" appears only in s2.

Example 2:
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

Constraints:
1 <= s1.length, s2.length <= 200
s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.
*/

class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {string[]}
   */
  uncommonFromSentences1(s1, s2) {
    const words = (s1 + " " + s2).split(" ");
    const count = new Map();
    const res = [];

    for (const word of words) {
      count.set(word, (count.get(word) || 0) + 1);
    }

    for (const [w, c] of count.entries()) {
      if (c === 1) {
        res.push(w);
      }
    }

    return res;
  }

  uncommonFromSentences2(s1, s2) {
    const words = (s1 + " " + s2).split(" ");
    const count = new Map();

    for (const word of words) {
      count.set(word, (count.get(word) || 0) + 1);
    }

    return [...count.entries()].filter(([_, c]) => c === 1).map(([w]) => w);
  }
}
