//PS-12 Sum of Digits of a Number
// 🧩 Problem:
// Write a function sumDigits that takes a number as input and returns the sum of its digits.
// 🔍 Example:
// sumDigits(123) ➞ 6
// sumDigits(1234) ➞ 10

function sumDigits(num) {
    let sum =0;
    let strNum= String(num);
    console.log(strNum)
    for(let i=0 ; i<strNum.length; i++){
        sum+= Number(strNum[i])
    }
return sum
}

function sumDigits(num) {
    let sum =0;
    while(num>0){
        sum+=num%10;
        num = Math.floor(num/10);
    }
    return sum
}
console.log(sumDigits(1235))