/*  Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

// Solution 1
function numberOfPairs1(gloves) {
  const pairsCount = gloves.reduce((acc, color) => {
    acc[color] = (acc[color] || 0) + 1
    return acc
  }, {})
  return Object.values(pairsCount).reduce((acc, n) => acc + Math.floor(n / 2), 0)
}

// Solution 2
function numberOfPairs2(gloves) {
  const glovesCount = {};
  gloves.forEach(el => {
    glovesCount[el] = (glovesCount[el] || 0) + 1
  })
  let pairsCount = 0
  
  for (const color in glovesCount) {
    pairsCount += Math.floor(glovesCount[color] / 2)
  }
  return pairsCount
}