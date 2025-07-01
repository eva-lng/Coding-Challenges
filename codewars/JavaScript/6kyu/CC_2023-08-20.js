/* Lottery Ticket

Time to win the lottery! Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:
[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

// Solution 1
function bingo1(ticket, win){
  if (ticket.filter(arr => arr[0].split('').some(el => el.charCodeAt(0) == arr[1])).length >= win) {
    return 'Winner!'
  } else {
    return 'Loser!'
  }
}

// Solution 2
function bingo(ticket, win){
  let miniWins = 0
  for (let i = 0; i < ticket.length; i ++) {
    const subArr = ticket[i]
    const letters = subArr[0]
    const num = subArr[1]
    for (let j = 0; j < letters.length; j ++) {
      if (letters.charCodeAt(j) == num) {
        miniWins += 1
        break
      }
    }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!'
}