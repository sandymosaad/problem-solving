// ✅ PS10 – Capitalize the First Letter of Each Word in a Sentence
// 🧩 Problem:
// Write a function capitalizeWords that takes a sentence as input and returns a new string where each word starts with an uppercase letter and the rest of the letters are lowercase.

// The function should:

// Convert the entire sentence to lowercase first.

// Capitalize only the first character of each word.

// Return the newly formatted sentence.

// 🔍 Example:

// capitalizeWords('sandy samir zAkher')
// Output: "Sandy Samir Zakher"
function capitalizeWords(sentence) {
    let sentenceUper = sentence.toLowerCase();
    let uperWords=[];
    let words =sentenceUper.split(' ')
    for(let i=0; i<words.length; i++){
        let  uperWord=words[i].charAt(0).toUpperCase() +words[i].slice(1)
        uperWords.push(uperWord)
    }
    let result = uperWords.join(' ');  
    return result
    //  let words = sentence.split(' ');
    // let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    // return capitalizedWords.join(' ');
}
capitalizeWords('sandy samir zAkher')