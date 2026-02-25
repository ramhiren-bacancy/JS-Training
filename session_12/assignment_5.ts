// Create a constructor type for UserRepository .
// Create a callable type that formats User name




class UserRepository {
    constructor(public name: string) {}
}

type UserRepositoryConstructor = new (users: string) => UserRepository

const Repo: UserRepositoryConstructor = UserRepository;

const u1 = new Repo("hiren")
const u2 = new UserRepository("hiren")
console.log(u1.name);

type FormatUserName = (name: string) => string;
const formatName: FormatUserName = (name) => {
  return "User: " + name.toUpperCase();
};
console.log(formatName(u1.name))