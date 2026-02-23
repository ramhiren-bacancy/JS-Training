const url:string = "https://jsonplaceholder.typicode.com/users"

type User = {
    id:number
    name : string
} 

type apires<T> = {
    success:boolean,
    data:T,
    msg:string
}

function demo():apires<User>{
    return {
        success:true,
        data:{
            id:1,
            name:"hiren"
        },
        msg:"hi"
    }
}
async function getUserNames(url:string):Promise<string[]>{
    const res = await fetch(url)
    const data : User[] = await res.json()
    // console.log(data)

    return data.map(i => i.name)
}

getUserNames(url).then(names => console.log(names))