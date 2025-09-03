

let order =[
    {item:'item1', price:100, quantity:2}, 
    {item:'item2', price:200, quantity:3}, 
    {item:'item3', price:300, quantity:4},
]

let total =0;
for(let i=0; i<order.length; i++){
    total+=order[i].price * order[i].quantity;
}

console.log(`
    Receipt:
    ${order.map(item=> 
    `
    ${item.item}, - Quantity: ${item.quantity}, Price - ${item.price} $, Total: ${item.price * item.quantity}$`).join('\n')}
    ----------------------------
    Total: ${total}
    `)