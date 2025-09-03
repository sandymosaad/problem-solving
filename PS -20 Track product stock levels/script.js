//PS - 20 Track product stock levels

let products =[
    {product:'Product A', stock: 10},
    {product:'Product B', stock: 5},
    {product:'Product C', stock: 0}
];

for(let i=0; i<products.length; i++){
    if(products[i].stock > 0){
        console.log(`${products[i].product} is in stock`)
    }else{
        console.log(`${products[i].product} is out of stock`)
    }
}