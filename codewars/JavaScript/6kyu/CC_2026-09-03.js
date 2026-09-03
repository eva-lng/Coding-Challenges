/* Cancer cells

Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
- Advance stage,described as letter C
- Initial stage,described as letter c

Rest cells are divided as follows:
- Normal cell,described as lowercase letter
- Important cell,described as uppercase letter

Prerequisites:
- Important cell,cannot be cut out.
- Advance cancer cell,should be cut out with adjacent cells if it can be done.

Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.
*/

function cutCancerCells(organism) {
  const res = [];

  for (let i = 0; i < organism.length; i++) {
    const cell = organism[i];
    if (cell.toUpperCase() === cell && cell !== "C") res.push(cell);
    else if (cell === "c" || cell === "C") continue;
    else {
      if (organism[i - 1] !== "C" && organism[i + 1] !== "C") res.push(cell);
    }
  }

  return res.join("");
}
