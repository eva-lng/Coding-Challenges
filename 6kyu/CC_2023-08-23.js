/* Word a10n (abbreviation) 

The word 'i18n' is a common abbreviation of 'internationalization' in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, 'a11y' is an abbreviation of 'accessibility'.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

- A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
- The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

Example:
abbreviate("elephant-rides are really fun!")

words (^):   "elephant" "rides" "are" "really" "fun"
               123456     123     1     1234     1
ignore short words:               X              X

abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
all non-word characters (*) remain in place
                    "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/

function abbreviate(string) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    const dividers = []
    const result = []

    const arr = string.split('').map((el) => {
        if (abc.includes(el.toLowerCase())) {
            return el
        } else {
            dividers.push(el)
            return ' '
        }
    }).join('').split(' ')

    const abbrevWords = arr.map(el => {
        return el.length > 3 ? el[0] + (el.length - 2) + el[el.length - 1] : el
    })

    for (let i = 0; i < abbrevWords.length; i++) {
        result.push(abbrevWords[i])
        result.push(dividers[i])
    }
    return result.filter(el => el).join('')
}