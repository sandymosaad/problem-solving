//9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */

// 40 ms
// var isPalindrome = function(x) {
//     let arr = x.toString().split('');
//     let reversedArr = arr.reverse();
//     let reversedNum = parseInt(reversedArr.join(''));
//     console.log(reversedNum);
//     console.log(x);
//     console.log(reversedNum == x);
//     return x === reversedNum;
// };

//  isPalindrome(121);

// // isPalindrome(12421);
// // isPalindrome('123321-');
// isPalindrome(1221);//why it truh
// isPalindrome('-1221-');// and why it is false


// 11 ms
var isPalindrome = function(x) {
    let arr = x.toString().split('');
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
        console.log(arr[i], arr[arr.length - 1 - i]);
    }
    return true;
};
// isPalindrome(121);
// isPalindrome(1221);
isPalindrome(-121);

//8 ms
var isPalindrome = function(x) {
    // Negative numbers aren't palindromes.
    // Numbers ending in 0 (except 0 itself) aren't either.
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Even digits: x === reversedHalf
    // Odd digits: x === Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};