/* The Coupon Code

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Your mission:
- Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
- A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

function checkCoupon1(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && new Date(currentDate) >= new Date(expirationDate);
}

function checkCoupon2(enteredCode, correctCode, currentDate, expirationDate) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  const currYear = parseInt(currentDate.split(' ')[2]);
  const expYear = parseInt(expirationDate.split(' ')[2]);
  const currMonth = months.indexOf(currentDate.split(' ')[0]);
  const expMonth = months.indexOf(expirationDate.split(' ')[0]);
  const currDay = parseInt(currentDate.split(',').join('').split(' ')[1]);
  const expDay = parseInt(expirationDate.split(',').join('').split(' ')[1]);
  
  if (enteredCode !== correctCode) return false;
  if (currYear > expYear) return false;
  if (currYear === expYear) {
    if (currMonth > expMonth) return false;
    if (currMonth === expMonth && currDay > expDay) return false;
  }
  return true;
}