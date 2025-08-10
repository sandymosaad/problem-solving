//PS-16 Reverse a String
// 🧩 Problem:
// Write a function reverseString that takes a string as input and returns the string reversed.
// Do not use the built-in .reverse() method. Instead, manually reverse the characters.

// Example:

function reverseString(str) {
    let reverseStringArr=[];
    for(let i=0; i<str.length; i++){
        reverseStringArr.unshift(str[i]);
    }
    return reverseStringArr.join('')
}
reverseString("hello"); // "olleh"
reverseString("sandy"); // "ydnas"