// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.


interface ReadOnlyUser {
    id : number
    name : string
    age : number
    email: string
}

type StringifiedUser = {
    [K in keyof ReadOnlyUser] : string
}

type OptionalAndNullableUser = {
    [K in keyof ReadOnlyUser]? : ReadOnlyUser[K] | null
}

