/* Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces. */

function capitalize(s){
    let oddIdCap = s.split('').map((char, i) => i % 2 == 0 ? char : char.toUpperCase()).join('');
    let evenIdCap = s.split('').map((char, i) => i % 2 == 0 ? char.toUpperCase() : char).join('');
    return [evenIdCap, oddIdCap];
};