/* 16+18=214

For this kata you will have to forget how to add two numbers.
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
You may assume both integers are positive integers.

Examples:
1  6
+
1  8
=
2  14
 
2  6
+
3  9
=
5  15
​
1  2  2
+
​   8  1	
=
1  10 3

7  2
+
   9
=
7  11
*/

function add(num1, num2) {
  const arr1 = num1.toString().split("").reverse();
  const arr2 = num2.toString().split("").reverse();
  const arr3 = [];

  for (
    let i = 0;
    i < (arr1.length > arr2.length ? arr1.length : arr2.length);
    i++
  ) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0));
  }

  return parseInt(arr3.reverse().join(""));
}
