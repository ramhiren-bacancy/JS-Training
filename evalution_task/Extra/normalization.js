/* 
input : 
[
  { userId: 1, role: "admin", project: "A" },
  { userId: 2, role: "dev", project: "A" },
  { userId: 1, role: "admin", project: "B" }
]

output:
{
  admin: {
    A: [1],
    B: [1]
  },
  dev: {
    A: [2]
  }
} 
*/


input = [
  { userId: 1, role: "admin", project: "A" },
  { userId: 2, role: "dev", project: "A" },
  { userId: 1, role: "admin", project: "B" }
]

output = input.reduce((acc,ele)=>{
    if(!acc[ele.role]){
        acc[ele.role] = {[ele.project]:[ele.userId]}
    }else{
        // let t = acc[ele.role]
        // t[ele.project] = ele.userId
         acc[ele.role][ele.project] =[ele.userId]
    }
   

 

    return acc
},{})

console.log(output);