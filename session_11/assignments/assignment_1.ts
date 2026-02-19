// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number


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