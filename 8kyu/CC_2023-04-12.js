/* Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
  let result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};

/* Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/

function friend(friends){
  return friends.filter(str => str.length === 4);
};