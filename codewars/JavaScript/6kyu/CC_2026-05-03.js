/* Expressive Objects


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
