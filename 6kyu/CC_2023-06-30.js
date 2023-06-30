/* Persistent Bugger.


*/

function persistence(num) {
    let count = 0;
    while (num > 9) {
      num = multiplyDigits(num);
      count++;
    }
    return count;
}
  
function multiplyDigits(num) {
    return num.toString().split('').reduce((acc, n) => acc * +n, 1);
}