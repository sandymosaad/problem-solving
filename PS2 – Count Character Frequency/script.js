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
console.log(countChars('soso'));

