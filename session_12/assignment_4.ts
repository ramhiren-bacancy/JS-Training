// Create abstract class Service<T> with abstract method execute()
// Extend it with UserService .


abstract class Service<T>{
    abstract execute() :T
}

interface User1 {
    id:number
    name:string
    email:string
}


class UserService extends Service<User1>{
    execute(): User1 {
        return {
            id:1,
            name : "hiren",
            email : "hiren@gmail.com"
        }
    }
}


const userService = new UserService()
const user = userService.execute()
