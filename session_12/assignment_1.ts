// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.

interface User {
    id: number
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}


type isNumber<T> = T extends number ? true : false

type A = isNumber<User["id"]>
type B = isNumber<number>
// type C = IsNumber<string>  

type haveEmail<T> = T extends {email : infer E} ? E : never

type D = haveEmail<User>
type E = haveEmail<{name : string}> // naver
