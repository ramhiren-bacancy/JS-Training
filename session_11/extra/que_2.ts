/*Output :
 [
  { id: 1, name: 'Amit' },
  { id: 3, name: 'Raj' },
  { id: 4, name: 'Simran' }
] 
*/



// Method - 1 - without Genaric
/* type User1 = {
    id : number,
    name : string,
    age : number,
    isActive : boolean
    role : "admin" | "user" | "moderator"
}

type Answer = {
    id : number,
    name : string
}


type Response1 = {
    status : number,
    data : {users:User1[]}
}


const response:Response1 ={
  status: 200,
  data: {
    users: [
      { id: 1, name: "Amit", age: 25, isActive: true, role: "admin" },
      { id: 2, name: "Neha", age: 17, isActive: false, role: "user" },
      { id: 3, name: "Raj", age: 30, isActive: true, role: "user" },
      { id: 4, name: "Simran", age: 22, isActive: true, role: "moderator" }
    ]
  }
};


function clear_repo(res:Response1):Answer[]{
   
    const a:Answer[] = res.data.users
                .filter((i)=> i.isActive == true && i.age>20)
                .map((i)=>{
                return {id:i.id,name:i.name}
    })
                
    
    return a
}

console.log(clear_repo(response)) */


// With - genaric 
type User1 = {
    id : number,
    name : string,
    age : number,
    isActive : boolean
    role : "admin" | "user" | "moderator"
}

type Answer = {
    id : number,
    name : string
}


type Response1<T> = {
    status : number,
    data : {users:T[]}
}


const response:Response1<User1> ={
  status: 200,
  data: {
    users: [
      { id: 1, name: "Amit", age: 25, isActive: true, role: "admin" },
      { id: 2, name: "Neha", age: 17, isActive: false, role: "user" },
      { id: 3, name: "Raj", age: 30, isActive: true, role: "user" },
      { id: 4, name: "Simran", age: 22, isActive: true, role: "moderator" }
    ]
  }
};

function clear_repo(res:Response1<User1>):Answer[]{
   
    const a:Answer[] = res.data.users
                .filter((i)=> i.isActive == true && i.age>20)
                .map((i)=>{
                return {id:i.id,name:i.name}
    })
                
    
    return a
}

console.log(clear_repo(response))


