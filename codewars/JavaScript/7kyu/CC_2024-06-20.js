/* ReOrdering

There is a sentence which has a mistake in its ordering.
The part with a capital letter should be the first word.
Please build a function for re-ordering

Examples:
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/

function reOrdering(text){
  if (text[0] === text[0].toUpperCase()) return text;
  const result = [];
  
  text.split(' ').forEach(el => {
    if (el[0] === el[0].toUpperCase()) {
      result.unshift(el);
    } else {
      result.push(el);
    }
  })
  return result.join(' ');
}