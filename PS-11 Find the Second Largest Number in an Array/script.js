// ✅ PS-11 Find the Second Largest Number in an Array
// 🧩 Problem:
// Write a function secondLargest that takes an array of numbers as input and returns the second largest distinct number in the array.
// If the array does not contain at least two distinct numbers, the function should return null.
// 🔍 Example:
// secondLargest([1, 2, 3, 4, 5, 6]) 
// ➞ 5

function secondLargest(arr) {
    let largestNum=-Infinity;
    let secLargestNum=-Infinity;
    for(let i=0; i<arr.length; i++ ){
        if(arr[i]>largestNum){
            secLargestNum= largestNum;
            largestNum=arr[i];
        }else if(arr[i]>secLargestNum && arr[i]<largestNum ){
            secLargestNum= arr[i];
        }
    }
    return secLargestNum === -Infinity ? null : secLargestNum
}
//test
console.log(secondLargest([1,2,3,4,5, 6,-7,-8,-9,-10]))