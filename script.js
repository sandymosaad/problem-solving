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

 //console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // 1

// ✅ PS4 – Counting Minutes I
// 🧩 Problem:
// Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (start time and end time) separated by a hyphen -.

// Time will be in the 12-hour clock format (e.g., 12:30pm), and your goal is to return the total number of minutes between the two times.

// Important notes:
// The times may span over midnight.

// The input will always be valid.

// Examples:
// Input: "9:00am-10:00am"
// Output: 60
// Input: "1:00pm-11:00am"
// Output: 1320

function convertToMinutes(timeStr) {
    let ampm = timeStr.slice(-2);
    let [hour, minute] = timeStr.slice(0, -2).split(':');
    hour = Number(hour);
    minute = Number(minute);

    if (ampm === 'am') {
        if (hour === 12) hour = 0; 
    } else {
        if (hour !== 12) hour += 12; 
    }

    return hour * 60 + minute;
}

function CountingMinutesI(str) {
    let [start, end] = str.split('-');

    let startMinutes = convertToMinutes(start);
    let endMinutes = convertToMinutes(end);

    let diff = endMinutes - startMinutes;

    if (diff < 0) {
        diff += 24 * 60; 
    }

    return diff;
}

// console.log(CountingMinutesI("9:00am-10:00am")); // 60
// console.log(CountingMinutesI("9:00am-10:00pm")); // 780
// console.log(CountingMinutesI("9:00pm-10:00am")); // 780
// console.log(CountingMinutesI("9:00pm-10:00pm")); // 60
// console.log(CountingMinutesI("12:30pm-12:00am")); // 690
// console.log(CountingMinutesI("12:00am-12:00pm")); // 720


// ✅ PS5 – Letter Changes
// 🧩 Problem:
// Write a function called LetterChanges that takes a string str (containing only lowercase letters) and:

// Changes each letter to the next letter in the alphabet.

// For example: 'a' becomes 'b', 'z' becomes 'a'.

// After shifting, capitalize the letter if it is a vowel (a, e, i, o, u).


function letterChanges(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Shift letter
        if (char === 'z') {
            char = 'a';
        } else {
            char = String.fromCharCode(char.charCodeAt(0) + 1);
        }

        // Capitalize if vowel
        if (vowels.includes(char)) {
            char = char.toUpperCase();
        }

        result += char;
    }

    return result;
}

//console.log(letterChanges("fun"));  
//console.log(letterChanges("zoo"));  


