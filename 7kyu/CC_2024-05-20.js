/* Simple beads count

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads:
r bb r bb r bb r bb r bb r

Implement countRedBeads(n) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

function countRedBeads(n) {
  return n < 2 ? 0 : n === 2 ? 2 : (n - 1) * 2;
}