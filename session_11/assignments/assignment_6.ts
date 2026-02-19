// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.

interface User{
    id:number
    name : string
    email : string
    age : number
    isActive : boolean
}

type UserPublicProfile = Omit<User,"email" | "isActive">


const user:UserPublicProfile = {
    id : 12,
    name : "hiren",
    age : 40
    // email : "hiren@gmail.com"
}


const usersById: Record<User["id"], User> = {
  "1": {
    id: 1,
    name: "Hiren",
    email: "hiren@gmail.com",
    age: 40,
    isActive: true
  },
  "50": {
    id: 2,
    name: "Alice",
    email: "alice@company.com",
    age: 30,
    isActive: false
  }
};


console.log(usersById)