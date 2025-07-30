// ✅ PS7 – Find the Longest Words in a Sentence
// 🧩 Problem:  

// Write a function findLongestWords that takes a string sentence as input and returns all the words that have the maximum length in the sentence.

// The sentence contains only words separated by spaces.

// If multiple words share the longest length, return all of them in an array.

// The original order of the words should be preserved.

// 📥 Input:

// A string of words separated by spaces.
// Example:
// "Sandy loves solving JavaScript challenges"

// 📤 Output:

// An array of the longest word(s).
// Example:
// ["JavaScript", "challenges"]

function findLongestWords(sentence){
    let words = [];
    words= sentence.split(' ');

    let longestWord ='';
    for (let i=0 ; i<words.length; i++){
         if(longestWord.length<words[i].length){
            longestWord =words[i];
        }
    }
   let lonWords=[];
    console.log(lonWords)
        console.log(longestWord)

        let length=longestWord.length
    lonWords=words.filter(w=>w.length===length)
     console.log(lonWords)
   // console.log(words)
    return lonWords 
}

console.log(findLongestWords("Sandy loves solving JavaScript challenges"));