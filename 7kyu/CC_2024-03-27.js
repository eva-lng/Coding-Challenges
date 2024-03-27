/* All or Nothing

Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect. Given a potentially incomplete answer key and the student's answers, write a function that determines whether or not a student can still score 100%. Incomplete questions are marked with an underscore, "_".

["A", "_", "C", "_", "B"]   # answer key
["A", "D", "C", "E", "B"]   # student's solution
➞ True
# Possible for student to get all questions correct.

["B", "_", "B"]   # answer key
["B", "D", "C"]   # student's solution
➞ False
# First question is correct but third is wrong, so not possible to score 100%.

["T", "_", "F", "F", "F"]   # answer key
["F", "F", "T", "T", "T"]   # student's solution
➞ True
# Possible for student to get all questions incorrect.

Examples:
(["B", "A", "_", "_"], ["B", "A", "C", "C"]) ➞ True
(["A", "B", "A", "_"], ["B", "A", "C", "C"]) ➞ True
(["A", "B", "C", "_"], ["B", "A", "C", "C"]) ➞ False
(["B", "_"], ["C", "A"]) ➞ True
(["B", "A"], ["C", "A"]) ➞ False
(["B"], ["B"]) ➞ True
(["_"], ["B"]) ➞ True

Notes:
- Test has at least one question.
- len(key) == len(answers)
*/

// solution 1
function possiblyPerfect1(key,answers) {
  let correct = 0;
  let wrong = 0;
  for (let i = 0; i < key.length; i++) {
    if (key[i] === '_') {
      correct++;
      wrong++;
    } else {
      key[i] === answers[i] ? correct++ : wrong++;
    }
  }
  return key.length === correct || key.length === wrong ;
}

// solution 2
function possiblyPerfect2(key,answers) {
  const allCorrect = answers.every((answer, i) => key[i] === '_' || answer === key[i]);
  const allWrong = answers.every((answer, i) => key[i] === '_' || answer !== key[i]);
  return allCorrect || allWrong;
}