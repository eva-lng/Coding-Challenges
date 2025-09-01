/* Rock Paper Scissors!

Rules of the "Rock, Paper, Scissors" game are:
- Rock beats Scissors
- Scissors beat Paper,
- Paper beats Rock.

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

public class Kata {
  public static String rps(String p1, String p2) {
    if (p1.equals(p2)) {
      return "Draw!";
    } else if ((p1.equals("rock") && p2.equals("scissors")) || (p1.equals("paper") && p2.equals("rock")) || (p1.equals("scissors") && p2.equals("paper"))) {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
  }
}