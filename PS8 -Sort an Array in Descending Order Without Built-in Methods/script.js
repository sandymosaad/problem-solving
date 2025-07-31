//  ✅ PS8 – Title: Sort an Array in Descending Order Without Built-in Methods
// 🧩 Problem: 
// "Merge Two Arrays Without Duplicates and Sort in Ascending Order"

// 📝 Description:

// Write a function mergeAndSortUnique that takes two arrays of numbers and performs the following steps:

// Merge the two arrays into one.

// Remove any duplicate values.

// Sort the resulting array in ascending order.

// Return the final array.

// 🔍 Example:
// mergeAndSortUnique([4, 2, 7, 1], [5, 2, 9, 1])

function mergeAndSortUnique(arr1,arr2){
    let bigArr = [...arr1, ...arr2];
    console.log(bigArr );
   // uniqueArr(bigArr)

    let unique = uniqueArr(bigArr);
    let sorted = sort(unique);
    return sorted;
}
function uniqueArr(arr){
    let unique=[];
    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    console.log(unique)
    return unique
}
function sort(arr){
    
    let sortArr=[]
    while(arr.length>0){
        let max=arr[0];
        let maxIndex=0; 
        for(let i=0 ; i<arr.length; i++){
        if(arr[i]>max){
            max= arr[i];
            maxIndex=i
        }
        }
        sortArr.push(max);
        arr.splice(maxIndex,1)
    }
     return sortArr
}

console.log(mergeAndSortUnique([4, 2, 7, 1], [5, 2, 9, 1]))
//  [1, 2, 4, 5, 7, 9]