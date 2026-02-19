function wrapInArray<T>(value:T):T[]{
    return [value];
}


console.log(wrapInArray(15))
console.log(wrapInArray("Hello"))



interface PaginatedResponse<T> {
    items : T[]
    total :number
}

interface User{
    id:number
    name:string
}

const response: PaginatedResponse<User> = {
    items:[
        { id: 1, name: "Alice" },
    ],
    total: 1
}