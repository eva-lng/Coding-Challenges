/* Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example:
"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice */

// Solution 1
function duplicateCount1(text) {
    text = text.toLowerCase();
    const charCount = {};
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        charCount[char] = (charCount || 0) + 1;
    }
    let count = 0;
    for (let ch in charCount) {
        if (charCount[ch] > 1) {
            count++;
        }
    }
    return count;
}

// Solution 2
function duplicateCount2(text) {
    return text.toLowerCase().split('').filter((el, i, arr) => {
        arr.indexOf(el) !== i && arr.lastIndexOf(el) === i;
    }).length;
}

// Solution 3
function duplicateCount3(text) {
    text = text.toLowerCase()
    let duplicate = [];
    let count = 0;

    text.split('').forEach(el => {
        if (!duplicate.includes(el) && (text.split(el).length - 1) > 1) {
            count++;
            duplicate.push(el);
        }
    })
    return count;
}

// Solution 4
function duplicateCount4(text) {
    let arr = text.toLowerCase().split('').sort();
    let duplicate = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && !duplicate.includes(arr[i])) {
            duplicate.push(arr[i]);
        }
    }
    return duplicate.length;
}