// ✅ PS-14 FizzBuzz
// 🧩 Problem:

// Write a function fizzBuzz that takes a positive integer n and prints numbers from 1 to n. For each number:

// If the number is divisible by both 3 and 5, print "fizzBuzz".

// If the number is divisible by only 3, print "fizz".

// If the number is divisible by only 5, print "buzz".

// Otherwise, print the number itself.

// 🔍 Example:
// Calling fizzBuzz(15) should print:


// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzBuzz

function fizzBuzz(n) {
    for(let i=1; i<=n; i++ ){
        if(i%3==0 && i%5==0){
            console.log('fizzBuzz')
        }else if(i%3==0){
            console.log('fizz')
        }else if(i%5==0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}

console.log(fizzBuzz(15))