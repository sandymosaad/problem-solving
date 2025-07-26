// ✅ PS6 – Word Reversal and Vowel Count
// 🧩 Problem:
// Write a function reverseWordsAndCountVowels(sentence) that takes a string sentence and does the following:

// Reverses each word in the sentence but keeps the word order.

// Counts how many vowels (a, e, i, o, u) are in the entire sentence (after reversing the words).

// Returns a new string that includes:

// The sentence with each word reversed.

// The total number of vowels found.

// 🧪 Example:

// Input: "hello world"
// Output: "olleh dlrow (Vowels: 3)"
// 🔧 Constraints:

// Only lowercase letters and spaces will be used.

// There will be no punctuation.

function reverseWordsAndCountVowels(sentence){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const words = sentence.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const reversedSentence = reversedWords.join(' ');

    let vowelCount = 0;
    const letters = reversedSentence.split('');
    for (const letter of letters) {
        if (vowels.includes(letter.toLowerCase())) {
            vowelCount++;
        }
    }

    return `${reversedSentence} (Vowels: ${vowelCount})`;
}


console.log(reverseWordsAndCountVowels('sandy moAsaad'));
