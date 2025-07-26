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

console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // 1

