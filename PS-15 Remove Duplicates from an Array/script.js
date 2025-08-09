//PS-15 Remove Duplicates from an Array
// Problem:
// Write a function removeDuplicates that takes an array arr and returns a new array containing only the unique elements from arr, preserving their original order.

// You must remove all duplicate values so that each element appears only once in the result.

// 🔍 Example:
// removeDuplicates([1, 2, 3, 3, 4, 4, 5, 6])
// 👉 [1, 2, 3, 4, 5, 6]

function removeDuplicates(arr) {
    let notDupliactes=[];
    for(let i=0 ; i<arr.length; i++){
        if(!notDupliactes.includes(arr[i])){
            notDupliactes.push(arr[i]);

        }
    }
    return notDupliactes;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

//console.log(removeDuplicates([1,2,3,3,4,4,5,6]))