/* Array plus array

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

function arrayPlusArray(arr1, arr2) {
    arr1 = arr1.reduce((sum, n) => sum + n, 0);
    arr2 = arr2.reduce((sum, n) => sum + n, 0);
    return arr1 + arr2;
}