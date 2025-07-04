/* Who has the most money?

You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:
Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money
*/

function mostMoney1(students) {
  let maxVal = 0;
  let names = [];
  for (const st of students) {
    const total = st.fives * 5 + st.tens * 10 + st.twenties * 20;
    if (total === maxVal) {
      names.push(st.name);
    } else if (total > maxVal) {
      maxVal = total;
      names = [st.name];
    }
  }
  return names.length > 1 ? "all" : names[0];
}

function mostMoney2(students) {
  const money = students.map(
    (st) => st.fives * 5 + st.tens * 10 + st.twenties * 20
  );
  if (money.length > 1 && money.every((n) => n === money[0])) return "all";
  const idx = money.indexOf(Math.max(...money));
  return students[idx].name;
}
