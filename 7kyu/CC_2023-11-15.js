/* Printer Errors


*/

function printerError(s) {
  const letters = 'abcdefghijklm';
  let errors = 0;

  for (let i = 0; i < s.length; i++) {
    if (!letters.includes(s[i])) { errors += 1 };
  }
  return `${errors}/${s.length}`;
}