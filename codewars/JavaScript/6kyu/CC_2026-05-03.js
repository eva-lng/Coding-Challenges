/* Expressive Objects

Write function evaluate(left, op, right)
that given two operands (left and right) and an operator (op), will evaluate and return the result.

For example:
const left = {
    'multiply': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [5, 6, 7, 8, 9],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};
// You will reduce each array based on its key. So you will start of with add(ing) [1,2,3,4,5] => 15
// then subtract(ing) [5, 6, 7, 8, 9] => -25 etc. Once all arrays have been reduced, you will perform the
// root key operation on all the reduced arrays. So in this case, you will multiply each reduced array with
// each other. The order is ALWAYS value of 'add' key first, then 'subtract', then 'multiply' and finally 
// 'divide'.

const right = {
    'subtract': {
        'add': [1, 2, 3, 4, 5],
        'subtract': [1, 2, 3, 4, 5],
        'multiply': [1, 2, 3, 4, 5],
        'divide': [1, 2, 3, 4, 5]
    }
};

evaluate(left, 'add', right) === -467.0083333333333
*/

function calcOp(op, arr) {
  switch (op) {
    case "add":
      return arr.reduce((acc, n) => acc + n);
    case "subtract":
      return arr.reduce((acc, n) => acc - n);
    case "multiply":
      return arr.reduce((acc, n) => acc * n);
    case "divide":
      return arr.reduce((acc, n) => acc / n);
  }
}

function calcObj(obj) {
  const res = [];
  for (const key in obj) {
    ["add", "subtract", "multiply", "divide"].forEach((op) =>
      res.push(calcOp(op, obj[key][op])),
    );
    return calcOp(key, res);
  }
}

function evaluate(left, op, right) {
  return calcOp(op, [calcObj(left), calcObj(right)]);
}
