// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.


interface User{
    id:number,
    name : string,
    email? : string,
    isActive : boolean
}



function activateUser<T extends {isActive:boolean}>(obj:T){
    if (obj.isActive == true){
       console.log(obj)
    }
}

function hasEmail<T extends {id:number;email:string}>(obj:T){
    console.log(`${obj.id} : ${obj.email}`)
}


const user1 : User = {
    id :1,
    name :"Hiren",
    email : "hiren@gmail.com",
    isActive : true
}

activateUser(user1)
// hasEmail(user1) compile time error




