'use strict';

// function countResponseTimeRegressions(responseTimes) {
//   let count =0;
//   for (let i = 1; i < responseTimes.length; i++ ){
//      let num = responseTimes[i];
//      let sum =0;
//      for(let x =i-1 ; x>=0 ; x--){
//         sum+=responseTimes[x]
//      }
//      if (num>(sum/i)){
//         console.log(num , sum/i, count)
//         count+=1
//      }
//   }
//   return count
  
  
// }
// console.log (countResponseTimeRegressions([100,200,150,300]))
//--------------------------------------------------------------------------------------------


// function findSmallestMissingPositive(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     while (
//       arr[i] > 0 &&
//       arr[i] <= n &&
//       arr[arr[i] - 1] !== arr[i]
//     ) {
//       let correctIndex = arr[i] - 1;
//       [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     if (arr[i] !== i + 1) {
//       return i + 1;
//     }
//   }

//   return n + 1;
// }

// console.log(findSmallestMissingPositive([3, 4, -1, 1])); // Output: 2
//--------------------------------------------------------------------------------------------

/**
 * @param {number} n
 * @return {Function} counter
 */

const createCounter= function(n) {
  
    return function() {
      let counter =n ;
      n+=1;
      return counter;
    };
};

console.log(createCounter(10));
console.log(createCounter(10));
console.log(createCounter(10));

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */