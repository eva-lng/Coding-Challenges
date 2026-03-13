/* Simple string reversal II

In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

str = "codewars", a = 1, b = 5 --> "cawedors"
str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"

Input will be lowercase and uppercase letters only.

The first index a will always be smaller than the string length; the second index b can be greater than the string length. 
*/

function solve(st, a, b) {
  return (
    st.slice(0, a) +
    st
      .slice(a, b <= st.length ? b + 1 : st.length)
      .split("")
      .reverse()
      .join("") +
    st.slice(b + 1)
  );
}
