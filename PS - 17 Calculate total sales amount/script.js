//PS - 17 Calculate total sales amount
// Problem:
// You are working for an online store. Your task is to write a JavaScript code snippet that calculates the total sales amount for a given set of sales transactions.

// Input details:

// An array of objects representing sales transactions. Each object has the following properties:
// item: Name of the product (string)
// quantity: Number of units sold (integer)
// price: Price per unit (float)
// Output details:

// A single number representing the total sales amount
let sales =[
    {item:'item1', price:100, quantity:2}, 
    {item:'item2', price:200, quantity:3}, 
    {item:'item3', price:300, quantity:4},
]

let totalSales =0;
for(let i=0; i<sales.length; i++){
    totalSales+=sales[i].price * sales[i].quantity;
}
console.log(totalSales)