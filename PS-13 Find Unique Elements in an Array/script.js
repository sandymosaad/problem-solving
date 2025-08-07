
// ✅ PS-13 Find Unique Elements in an Array

// 🧩 Problem:
// Write a function findUnique that takes an array of numbers and returns a new array containing only the numbers that appear exactly once in the original array.

// You should ignore all numbers that appear more than once.

// 🔍 Example:
// js
// Copy
// Edit
// findUnique([1, 1, 2, 3, 4, 5, 6, 7, 6])
// Output: [2, 3, 4, 5, 7]
function findUnique(arr) {
    let count ={}
    let unique=[]
    for(let i=0; i<arr.length; i++){
        let num =arr[i];
        count[num]= (count[num] || 0) + 1
    }
    for(let num in count){
        if (count[num]===1){
            unique.push(Number(num))
        }
    }
    console.log(unique)
    return unique
}
console.log(findUnique([1,1,2,3,4,5,6,7,6]))