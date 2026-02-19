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




