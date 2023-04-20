/* Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */

function isIsogram(str){
    if (str === '') {
      return true;
    }
    
    let arr = str.toLowerCase().split('');
    let arrNew = [];
    
    for (let item of arr) {
      if (!arrNew.includes(item)) {
        arrNew.push(item);
      }
    }
    
    let res1 = arr.join('');
    let res2 = arrNew.join('');
    return res1 === res2;
}