/*  Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples:
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
  return str.split('-').join('_').split('_').map((el, i, arr) => 
    arr.indexOf(el) !== 0 ? el[0].toUpperCase() + el.slice(1) : el).join('');
}