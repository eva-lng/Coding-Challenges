/* Mutate My Strings

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:
stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/

function mutateMyStrings(stringOne, stringTwo){
  let result = stringOne + '\n';
  let last = stringOne;
  
  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      last = last.slice(0, i) + stringTwo[i] + last.slice(i + 1);
      result += last + '\n';
    }
  }
  return result;
}