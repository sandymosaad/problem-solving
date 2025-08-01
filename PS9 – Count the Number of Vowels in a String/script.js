// ✅ PS9 – Title: "Count the Number of Vowels in a String"

// 🧩 Problem: 

// Write a function countVowels that takes a string as input and returns the total number of vowel letters (a, e, i, o, u) in the string. The function should:

// Be case-insensitive (treat uppercase and lowercase letters the same).

// Ignore non-alphabetic characters (like numbers, symbols, or spaces).

// Count and return only the vowels.

// 🔍 Example:

// countVowels('sandy samir ZAhker')
// Output: 5
function countVowels(str){
     str = str.toLowerCase().replace(/[^a-z]/gi,'').split('');
    let count=0;
    let vowels=['a', 'e', 'i', 'o', 'u']; 
    for(let i=0; i<str.length; i++){
        if( vowels.includes( str[i])){
            count+=1
        }
    }
    return count
}
console.log (countVowels('sandy samir ZAhker'));