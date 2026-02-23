// {
//   10: { totalAmount: ?, transactions: [...] },
//   11: { totalAmount: ?, transactions: [...] },
//   12: { totalAmount: ?, transactions: [...] }
// }

const t = [
  { id: 1, userId: 10, amount: 500 },
  { id: 2, userId: 11, amount: 300 },
  { id: 3, userId: 10, amount: 700 },
  { id: 1, userId: 10, amount: 500 }, // duplicate id
  { id: 4, userId: 12, amount: 200 },
  { id: 2, userId: 11, amount: 300 }  // duplicate id
];

function getInfo(t){
    const a = t.reduce((acc,curr)=>{
        if(!acc[curr.userId]){
            acc[curr.userId] = {totalAmout:0,transactions:[]}
        }
        if(!acc[curr.userId].transactions.includes(curr.id)){
            acc[curr.userId].totalAmout += curr.amount
            acc[curr.userId].transactions.push(curr.id)
        }
        
        return acc
    },{})
        
    return a
}

console.log(getInfo(t))