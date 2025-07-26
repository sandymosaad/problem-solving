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

console.log(letterChanges("fun"));  
console.log(letterChanges("zoo"));  


