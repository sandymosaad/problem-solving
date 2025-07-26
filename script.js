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

