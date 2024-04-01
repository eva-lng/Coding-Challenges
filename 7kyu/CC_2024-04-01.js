/* Simple Fun #147: Find The Missing Tree

After a long night (work, play, study) you find yourself sleeping on a bench in a park. As you wake up and try to figure out what happened you start counting trees.
You notice there are different tree sizes but there's always one size which is unbalanced. For example there are 2 size 2, 2 size 1 and 1 size 3. (then the size 3 is unbalanced)
Given an array representing different tree sizes. Which one is the unbalanced size.

Notes:
- There can be any number of sizes but one is always unbalanced
- The unbalanced size is always one less than the other sizes
- The array is not ordered (nor the trees)

Examples:
For trees = [1,1,2,2,3], the result should be 3.
For trees = [2,2,2,56,56,56,8,8], the result should be 8.
For trees = [34,76,12,99,64,99,76,12,34], the result should be 64.

Input/Output:
[input] integer array trees
Array representing different tree sizes

[output] an integer
The size of the missing tree.
*/

// solution 1
function findTheMissingTree1(trees) {
  const counts = {};
  let minVal = Infinity;
  let minKey = null;
  
  for (const n of trees) {
    counts[n] = (counts[n] || 0) + 1;
  }
  
  for (let n in counts) {
    if (counts[n] < minVal) {
      minVal = counts[n];
      minKey = n;
    }
  }
  
  return +minKey;
}

// solution 2
function findTheMissingTree2(trees) {
  const counts = trees.map(num => trees.filter(n => n === num).length);
  let minIdx = null;
  let min = Infinity;
  
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] < min) {
      min = counts[i];
      minIdx = i;
    }
  }
 
  return trees[minIdx];
}