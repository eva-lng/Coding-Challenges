/* Ranking position

In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

For example: Input structure:
[
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
]

Output should be:
[
  {
    name: "Bob",
    points: 130,
    position: 1,
  },
  {
    name: "Kate",
    points: 120,
    position: 2,
  },
  {
    name: "Mary",
    points: 120,
    position: 2,
  },
  {
    name: "John",
    points: 100,
    position: 4,
  },
]
*/

function ranking(people) {
  people.sort((a, b) => {
    if (b.points === a.points) {
      return a.name.localeCompare(b.name);
    }
    return b.points - a.points;
  });
  
  let position = 1;
  people.forEach((el, i, arr) => {
    if (i > 0 && arr[i - 1].points === el.points) {
      el.position = arr[i-1].position;
    } else {
      el.position = position;
    }
    position++;
  });
  
  return people;
}