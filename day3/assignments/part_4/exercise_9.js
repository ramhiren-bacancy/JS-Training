const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

let each_price = inventory.filter((i) => i.stock>0).map((i) => i.price * i.stock)

let total = each_price.reduce((acc,i)=>{
    return acc += i
},0)

console.log(total);