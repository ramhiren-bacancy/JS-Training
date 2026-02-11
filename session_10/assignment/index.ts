/* 
    Assignment 1: Type Inference
    Declare variables using let and const with initial values and observe inferred types
    Try reassigning incompatible values and note the compiler errors
    Write a function without a return type and inspect what TypeScript infers 
*/

let a = 10
console.log(typeof(a))
a = "Hiren"
console.log(typeof(a))
console.log(a)
const b = "Ram"
console.log(typeof(b))
// b = 40 TypeError: Assignment to constant variable.

function add(a:number,b:number){
    return a+b
}

const sum = (a:number,b:number) =>{
    return a + b
}


/* ************************************************************************************************************ */

//! any vs unknow

//? Question
// let value: any = 10;
// value.toUpperCase();  //  No error --> At compile time , and when you run then it give error.

// let value1: unknown = 10;
// value1.toUpperCase();  //  Error --> give error at compile time

// ? Question : Compare the compiler behavior and runtime safety
//in "any" case : is compiled successfully and got run time error and app will be crash
//in "unknown" case : is give complied time error

// ? Question : Create a function that accepts any and performs operations without checks
// ?Create the same function using unknown and add proper type guards

function print(value: any) {
  console.log(value.toUpperCase()); // No error At compile time , and when you run then it give error.
}


function print1(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Safe
  }
}

print("Hiren") // --> No Error
print(10) //--> give error

print1("Hiren") 
print1(10) 
// Both run successfully


/* ************************************************************************************************************ */

// ! Assignment 3

type Admin = {
    role: 'admin';
    permissions: string[];
};

type Customer = {
    role: 'customer';
    permissions: string[];
};

type Guest = {
    role: 'guest'
    permissions : string[]
}

type User = Admin | Customer | Guest;

const AdminUser : Admin= {
    role : "admin",
    permissions : ['read','create','delete','update']
}

const CustomerUser : Customer = {
    role : "customer",
    permissions : ['read', 'create']
}

const  GuestUser : Guest = {
    role : 'guest',
    permissions : ['read']
}

function handleUser(user: User) {
    if (user.role === 'admin') {
        console.log('Admin permissions:', user.permissions);
     
    } 
    else if (user.role === 'customer') {
        console.log('Customer permissions:', user.permissions);
    } 
    else if (user.role === 'guest') {
        console.log('Guest permissions:', user.permissions);
    }
}

handleUser(AdminUser)


/* ************************************************************************************************************ */

// ! Assignment 4 

type OrderBase = {
  orderId: number;
  amount: number;
};

type Auditable = {
  createdAt: Date;
  createdBy: string;
};


type Order = OrderBase & Auditable;


const order: Order = {
  orderId: 101,
  amount: 250,
  createdAt: new Date(),
  createdBy: "user"  // if we missing any one then give Compile time error 
};

console.log(order)

//?Part 2

interface OrderBase1 {
  orderId: number;
  amount: number;
}

interface Auditable1 extends OrderBase1 {
  createdAt: Date;
  createdBy: string;
}

const order1: Auditable1 = {
  orderId: 101,
  amount: 250,
  createdAt: new Date(),
  createdBy: "user"
};




//?Part 4

type HasName = {
  name: string;
};

type HasAge = {
  age: number;
};

type Person = HasName & HasAge;

const person: Person = {
  name: "Hiren",
  age: 22
};


// ? part 5

interface HasName1 {
  name: string;
}

interface Person1 extends HasName1 {
  age: number;
}


// Try removing a required property and observe the compiler error ?
// Ans: Property is missing that type error are occure

// Identify when intersection is better than union ?
// Ans : when we need combination of any type then we use intersection. and when we have multipal propertice then
//  we use union.


/* ************************************************************************************************************ */

// ! Assignment 5 - Type Aliases

// ? Create reusable aliases for union and intersection types

type Status = "pending" | "approved" | "rejected";
let orderStatus : Status = "approved";

type HasName = {
    name : string
}

type HasAge = {
    age : number
}

type Person = HasName & HasAge

type StringOrNumber = string | number;

let value : StringOrNumber

let num_val : StringOrNumber = 10
let str_val : StringOrNumber = "Hello"

// How does this improve readability?
// Ans : It Avoids Repetition,It Makes Complex Types Readable


/* ************************************************************************************************************ */

// ! Assignment 6 Interfaces

//?  Create Admin and Customer interfaces using a common base

interface User {
    id: number,
    name : string,
    email : string
}

interface Admin extends User{
    role : "admin",
    permission : string[]
}

interface Customer extends User {
    role : "customer",
    order :number
}

const admin: Admin = {
  id: 1,
  name: "Hiren",
  email: "Hiren@google.com",
  role: "admin",
  permission: ["manage_users", "edit_settings"]
};

const customer: Customer = {
  id: 2,
  name: "shyam",
  email: "shyam@email.com",
  role: "customer",
  order: 25
};

type AppUser = Admin | Customer;

function handleUser(user: AppUser) {
  if (user.role === "admin") {
    console.log(user.permission);
  } else {
    console.log(user.order);
  }
}

handleUser(admin)
handleUser(customer)

function printBase(user: User): void {
  console.log("User name: " + user.name);
  console.log("email: " + user.email);
}

// pass both
printBase(admin)
printBase(customer)


// 
//  create api response interface
interface ApiResponse {
  success: boolean;
  message: string;
}

//  function that accept this interface
function handleResponse(res: ApiResponse): void {
  if (res.success) {
    console.log("Success: " + res.message);
  } else {
    console.log("Failed: " + res.message);
  }
}

//  extend and reuse interface
interface UserApiResponse extends ApiResponse {
    data: User[];
}

const userResponse: UserApiResponse = {
  success: true,
  message: "Users fetched successfully",
  data: [admin, customer],
};

handleResponse(userResponse);

// since UserApiResponse extend ApiResponse
// we can pass it in handleResponse


interface Product {
  id: number;
  brand: string;
  price: number;
  stock: number;
}

const p1: Product = {
  id: 101,
  brand: "Laptop",
  price: 50000,
  stock: 25,
};

// if we remove any property like price or name compiler give error because all fields are required


/* ************************************************************************************************************ */

// ! Assignment 7 Enum

//?  Create an enum for payment states (INITIATED, SUCCESS, FAILED)
enum PaymentState {
  Initiated = "INITIATED",
  Success = "SUCCESS",
  Failed = "FAILED"
}

let paymentStatus: PaymentState;

paymentStatus = PaymentState.Initiated;
// paymentStatus = PaymentState.failed;
// paymentStatus = Success  

// ?Write a function that accepts only this enum
function handlePayment(state: PaymentState): void {
  if (state === PaymentState.Success) {
    console.log("Payment completed successfully.");
  } else if (state === PaymentState.Failed) {
    console.log("Payment failed.");
  } else {
    console.log("Payment initiated.");
  }
}

handlePayment(PaymentState.Success);  

// ? Why enums are better than magic strings?
// Ans : Autocomplete , Compile-Time Safety (means when TS->JS in js there not type,interface,enum all are obj)
        // Centralized Definition,Refactoring Safety


/* ************************************************************************************************************ */

// ! Assignment 8 Typed Functions

// ?Write a function with required and optional parameters

function createUser(name: string, age?: number): string {
  if (age != undefined) {
    return `User ${name} is ${age} years old.`;
  }
  return `User ${name} was created.`;
}

createUser("Hiren",22)

// ? Define return types explicitly

function add(a: number, b: number): number {
  return a + b;
}

// ? Create a small utility function that would exist in a real project
// Used for:
// Form validation
// API input validation
// Guard clauses
function isEmpty(value: string | null | undefined): boolean {
  return value == null || value.trim().length === 0;
}


/* ************************************************************************************************************ */
// ! Assignment 9 


// ? Create a service class exposing only required public methods
// ? Keep internal data private
// ? Explain which members should be accessible and why


class Users{
  private users: string[] = [];  // private data (not accessible outside a class)

  //public method 
  public addUser(user: string): void {
    this.users.push(user);
    console.log("user ADD")
  }

  //public method 
  public getUsers(): string[] {
    return [...this.users];
  }

}

const users = new Users();

users.addUser("Hiren");
users.addUser("Shyam");

console.log(users.getUsers()); 
// console.log(Users.users)  Not accessible


// ?Create a class with public, private, and protected members
// ?Try accessing them outside the class
// ?Which members should be exposed and why?

class Employee {
  public name: string; // public member --> accessible everywhere
  private salary: number;  // private member --> accessible only inside class
  protected department: string; // protected member --> accessible in this class + subclasses

  constructor(name: string, salary: number, department: string) {
    this.name = name
    this.salary = salary
    this.department = department
  }

  // public method
  public getDetails(): string {
    return `${this.name} works in ${this.department}`
  }

  // private method
  private calculateBonus(): number {
    return this.salary * 0.1
  }

  // protected method
  protected getDepartment(): string {
    return this.department
  }
}

const emp = new Employee("Hiren", 50000, "Python")

console.log(emp.name)
console.log(emp.getDetails())
// console.log(emp.salary)  // Not accessible --> private
// console.log(emp.department); // Not accessible --> protected
// emp.calculateBonus(); // Private method
// emp.getDepartment(); //Not accessible --> Protected Method

class Manager extends Employee {
  public showDepartment(): string {
    return this.department  // Accessible --> Protected
  }
}

const emp2 = new Manager("Shyam", 80000, "React");
console.log(emp2.showDepartment())  
