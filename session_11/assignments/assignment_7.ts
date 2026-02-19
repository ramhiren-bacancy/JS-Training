// Create custom utility ReadOnlyByKeys<T,k> that make select keys readonly.
// Create utility NonNullFields<T> that remove null and undefined from all properties
// Apply Both User and test diffrent scenario.

interface User{
    id:number
    name : string
    email : string
    age : number
    isActive : boolean
}

interface NullableUser {
  id: number | null;
  name: string | null;
  email: string | null;
  age: number | null;
  isActive: boolean | undefined;
}


type ReadOnlyByKeys<T,K extends keyof T> = Omit<T,K> & {readonly [P in K] : T[P]}

type NonNullFields<T> = {
    [K in keyof T] : NonNullable<T[K]>
}

type userReadOnly = ReadOnlyByKeys<User, "id"|"email">

const user1: userReadOnly = {
  id: 1,
  name: "Hiren",
  email: "hiren@gmail.com",
  age: 40,
  isActive: true
};

// user1.id = 56 -- Error

const user2 : NonNullFields<NullableUser> ={
    id : 2,
    name : "Ram",
    email : "ram@gamil.com",
    age : 45,
    isActive : false
}