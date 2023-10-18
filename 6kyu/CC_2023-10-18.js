/* Validate my Password

I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:
More than 3 characters but less than 20.
Must contain only alphanumeric characters.
Must contain letters and numbers.
*/

function validPass(password){
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '1234567890';
  let hasLetters = false;
  let hasNums = false;
  let invalidCount = 0;

  if (password.length < 4 || password.length > 19) return 'INVALID';
  for (let char of password) {
    if (letters.includes(char)) hasLetters = true;
    else if (nums.includes(char)) hasNums = true;
    else invalidCount += 1;
  }
  if (!hasLetters || !hasNums || invalidCount) return 'INVALID';

  return 'VALID';
}