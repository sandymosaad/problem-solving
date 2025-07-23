// ✅ PS1 – Check Palindrome
// 🧩 Problem:
// Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise.
// A palindrome is a word that reads the same backward as forward.

// Ignore case and non-alphanumeric characters

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
}

var str = "A man, a plan, a canal: Panama";

if (isPalindrome(str)) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}



// ✅ PS2 – Count Character Frequency
// 🧩 Problem:
// Write a function that takes a string and returns an object showing how many times each character appears in the string.
// Ignore case and ignore all spaces.

function countChars(str) {
    str= str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let count = {};
    for (let i=0; i<str.length; i++){
        if (count[str[i]]){
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }
    return count;
}
//console.log(countChars('soso'));

// ✅ PS3 – Find the Most Frequent Element in an Array
// 🧩 Problem:
// Write a function that takes an array of numbers and returns the number that appears most frequently.
// If the array is empty, the function should return null.

// Example:

// mostFrequent([1, 3, 1, 3, 2, 1]); // Output: 1
// Explanation:
// In the array [1, 3, 1, 3, 2, 1], the number 1 appears three times, which is more than any other number.
function mostFrequent(arr) {
    if (arr.length === 0) return null;

    let count = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        //console.log(num);
        count[num] = (count[num] || 0) + 1;
    }

    let maxCount = 0;
    let maxNum = null;

    for (let num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            maxNum = Number(num);
        }
    }

    return maxNum;
}

 console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // 1