/* Pyramid Array

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s
*/

// solution 1
function pyramid1(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(new Array(n).fill(1))
  }
  return res;
}

// solution 2
function pyramid2(n) {
  return Array(n).fill().map((el, i) => Array(i + 1).fill(1))
}

// solution 3
function pyramid3(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const subArr = [];
    for (let j = 1; j <= i; j++) {
      subArr.push(1);
    }
    res.push(subArr);
  }
  return res;
}