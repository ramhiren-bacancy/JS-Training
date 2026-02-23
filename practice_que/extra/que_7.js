// {
//   IT: {
//     count: 2,
//     employees: [...]
//   },
//   HR: {
//     count: 1,
//     employees: [...]
//   },
//   Finance: {
//     count: 1,
//     employees: [...]
//   }
// }
const emp = [
  { id: 1, name: "A", department: "IT" },
  { id: 2, name: "B", department: "HR" },
  { id: 3, name: "C", department: "IT" },
  { id: 4, name: "D", department: "Finance" }
];

function getInfo(emp){
    
    const a = emp.reduce((acc,curr)=>{
        if(!acc[curr.department]){
            acc[curr.department] = {count:0,employees: []}
        }
        acc[curr.department].count++
        acc[curr.department].employees.push(curr.name)
        
        return acc
    },{})
    
    return a
}

console.log(getInfo(emp))