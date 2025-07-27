// PS6-Sort Words by Length
//🧩 Problem:
// Write a function called sortWordsByLength that takes a sentence as input and returns an array of the words sorted in ascending order based on their length.
// If two words have the same length, their original order should be preserved.

// 📥 Input:
// A string containing a sentence with multiple words.

// 📤 Output:
// An array of words sorted by their length.

// 🔍 Example:
// sortWordsByLength("Sandy loves solving JavaScript challenges");
// 💡 Output:

// ["Sandy", "loves", "solving", "JavaScript", "challenges"]

function sortWordsByLength(sentence){
    let words=sentence.split(' ');
    let sortWordsByLengths=[];

    while(words.length>0){
        let shortestWord=words[0];
        let shortestWordIndex=0
            for (let i=1 ; i<words.length; i++){
            if(shortestWord.length>words[i].length){
                shortestWord =words[i];
                shortestWordIndex=i;
            }
        }
            sortWordsByLengths.push(shortestWord);
        words.splice(shortestWordIndex,1);
    }
    return sortWordsByLengths;
}

console.log(sortWordsByLength("Sandy loves solving JavaScript challenges"));