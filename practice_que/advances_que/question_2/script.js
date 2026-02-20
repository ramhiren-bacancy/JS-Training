// {
//   1: {
//     totalTime: 25,
//     login: 2,
//     browse: 1,
//     logout: 1
//   },
//   2: {
//     totalTime: 22,
//     browse: 1,
//     logout: 1
//   },
//   3: {
//     totalTime: 3,
//     login: 1
//   }
// }

const a = [
  { userId: 1, type: "login", duration: 5 },
  { userId: 2, type: "browse", duration: 20 },
  { userId: 1, type: "browse", duration: 15 },
  { userId: 3, type: "login", duration: 3 },
  { userId: 2, type: "logout", duration: 2 },
  { userId: 1, type: "logout", duration: 1 },
  { userId: 1, type: "login", duration: 4 }
]

const  b = a.reduce((acc,curr)=>{
    if(!(curr.userId in acc)){
        acc[curr.userId] = {totalTime:0 }
    }
    acc[curr.userId][curr.type]
    ? (acc[curr.userId][curr.type]+=1 )
    : (acc[curr.userId][curr.type] =1)
     
    acc[curr.userId].totalTime += curr.duration
    return acc
    
},{})

console.log(b)