// Show only available products with formatted labels.
// format like: "Laptop (5 in stock)"

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 3 }
];


console.log(products.filter(p => p.stock>0).map(p => `${p.name} (${p.stock} in stock)`));