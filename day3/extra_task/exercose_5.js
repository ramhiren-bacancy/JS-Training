// Calculate total credited amount

const transactions = [
  { id: 1, amount: 500, status: "SUCCESS" },
  { id: 2, amount: -200, status: "SUCCESS" },
  { id: 3, amount: 300, status: "FAILED" },
  { id: 4, amount: 700, status: "SUCCESS" }
];

const a = transactions.filter(i => i.status=="SUCCESS" && i.amount>0).reduce((acc,i)=>{
    return acc += i.amount
},0)

console.log(a);