interface User{
    id:number,
    name : string,
    email? : string,
    isActive : boolean
}

const user1 : User = {
    id :1,
    name :"Hiren",
    email : "hiren@gmail.com",
    isActive : true
}


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}
const userName = getProperty(user1, "name")
console.log(userName)


function updateProperty<T, K extends keyof T>(obj:T,key:K,val:T[K]):T{
    obj[key] = val
    return obj
}

console.log(updateProperty(user1,"id", 2))
// console.log(updateProperty(user1,"id", "ram")) ->complie time error