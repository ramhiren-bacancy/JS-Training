
// {
//   10: { totalAmount: ?, orders: [...] },
//   11: { totalAmount: ?, orders: [...] }
// }

const orders = [
  { id: 1, userId: 10, amount: 5000, status: "completed" },
  { id: 2, userId: 11, amount: 2000, status: "pending" },
  { id: 3, userId: 10, amount: 7000, status: "completed" },
  { id: 4, userId: 12, amount: 1000, status: "cancelled" },
  { id: 5, userId: 11, amount: 9000, status: "completed" }
];

function getInfo(orders){
    
    const t = orders.filter((i)=>i.status == "completed")
    
    const a = t.reduce((acc,curr)=>{
        if(!acc[curr.userId]){
            acc[curr.userId]={totalAmount:0,orders:[]}
        }
        acc[curr.userId].totalAmount += curr.amount
        acc[curr.userId].orders.push(curr.id) 
        
        return acc
    },{})
    
    return a
}

console.log(getInfo(orders))

