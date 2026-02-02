// Basic Of JS : Varible,scope,Execution Context,DataTypes,development Envrionment

/*
JS is HighLevel - (Human can easy underStand not / memory mangement auto)
      Dynamic - Do NOT to define Datatype menually. type decide while program is running,Type chage At run Time

      interpreted - code is executed line-by-line at runtime, not compiled into machine code.  
    
      Server-side: Powered by Node.js for backend APIs.

Js is run on Broswer inside a V8 engine. Js  run on server Side also like Bun,deno,nodejs


Now JS is interpreted + JIT compiled (Just in Time) 
Code is first interpreted, then optimized into machine code


JS is synchronous and signal threaded

Single thread = JavaScript executes only ONE task at a time. on Call Stack
Synchronous = each statement waits for the previous one to finish
            but it can handle asynchronous tasks using an event Loop.

Event Loop = allows JS to handle asynchronous operations without blocking the main thread.
            EX: Web API - provided by brower like SetTimeout,fetch
                Macrotask(Callback Queue) - stores callback like setTimeout
                Microtask  - Higher priority queue like promise.then()

in short : 
Event Loop - Continuously checks:
            Is Call Stack empty?
            If yes → move tasks from queue to stack


Microtasks are high-priority asynchronous tasks that run immediately after the current synchronous code finishes.
Examples of Microtasks:
        Promise.then()
        Promise.catch()
        Promise.finally()

Macrotasks are lower-priority asynchronous tasks that run after microtasks are completed.

Examples of Macrotasks:
        setTimeout()
        setInterval()
        setImmediate()

*/

/* 
Browser Developer Tools 

1) Elements - Inspect HTML structure , Edit CSS styles live
2) Console  - Shows JavaScript output & errors
3) Sources  -  view JS file, add breakpoints and debug mode.
4) Network - see the API call, check req-res of API
5) Application -  LocalStorage,Session Storage,cookie and cache


variable and scope 
var - global scope - re assign - re declare - hoisting (undefined) - old one
let - block scope - reassign - NO redeclare - Temporal Dead Zone
var - block scope - No reassign - No redeclare - Temporal Dead Zone
*/

/* console.log(a); //undefined
var a = 10

console.log(b)
let b =10   //  ReferenceError: Cannot access 'b' before initialization

console.log(c);
let c = 10  // ReferenceError: Cannot access 'c' before initialization

console.log(x); //ReferenceError: x is not defined
 */

/* 
Data Type - 7 main
1) String  2) Number 3) boolean 
4)undefined - A variable that has been declared but not assigned a value.
        Ex- 
                let a;
                console.log(a); // undefined

                function test() {}
                console.log(test()); // undefined

                give by JS auto. -> default


5) null - value is intentionally empty 
        Ex - 
                let b = null;

                give by dev. -> intentionally

6) symbol - used to create unique identifiers.
        const id = Symbol('id');
        const id2 = Symbol('id');
        id !== id2

7) BigInt - Integers too large to be represented by Number (safe limit is 2^53 - 1).
*/

/*
 10/"abc" ---> NaN
 Math.sqrt(-1) ---> NaN
 NaN == NaN   // false
 NaN === NaN  // false
 isNaN("hello");        // true (not strict)
 Number.isNaN("hello") // false (recommended)
 Number.isNaN(NaN)     // true
*/

/*
Type Of - 

1) typeof undefined; // "undefined"
2) typeof null;      // "object"
3) typeof NaN        // "number" 
4) typeof (12/"abc") // "number"
5) let user;
        console.log(typeof user); ➜ 'undefined'
6) const huge = 9007199254740991n; // Note the 'n' at the end  --> 'bigint'
7) const id = Symbol('unique'); ➜ 'symbol'


 */

/* 
Execution Context -
        everythings in js happend inside execution context

        2 part of Execution Context -> 1)Memory(Varible Enviroment) 2)Code (Thread Execution)

        2 phases: 1) Memory Creation - in memory side js assign memory to all varible and function
                                        varible value is undefined  and function value is whole inner code
                  2) Code Execution - in this actual value of varible place in memory and replace with 
                                        undefined
                                      and where function call happend for function there is created another 
                                      Execution Context in Code Area

                                        that solved function and return value of function which store in
                                        Memory side where varible sotre that function

*/

/* 
Call by Value : Pass Copy / Value of varible in function
                that can not chages original value outside of function

                All primitive Data type is Call by value.

        EX.
        let a = 10;
        function change(a) {
                 a = 20;
                console.log(a); //20
        }

        change(a);
        console.log(a); //10

Call by Reference : pass Reference (address) of the object in function
                that change original value of obj outside of function

        let obj = {name : "ram"}

        function change(obj){
                obj.name="Hiren"
        }
        change(obj)
        console.log(obj.name);
*/

/* 
Shadowing - means you declare varible in inner scope with same varible name as outer scope have.
        Example:
                let x = 10;

                function test() {
                        let x = 20;   // shadows outer x
                        console.log(x);
                }

                test();        // 20
                console.log(x); // 10



Shadowing with let,var and const
1) let 
        let a = 5;

        {
                let a = 10;   // allowed
                console.log(a); // 10
        }

        console.log(a); // 5

2) var
        var a = 5;

        {
                var a = 10;   // allowed
                console.log(a); // 10
        }

        console.log(a); // 10

3) const 
        cont a = 5;

        {
                const a = 10;   // allowed
                console.log(a); // 10
        }

        console.log(a); // 5


4) diffrent cases:
        var a = 5;

        {
                let a = 10;   // allowed
                console.log(a); // 10
        }

        console.log(a); // 5


        let a = 5;

        {
                var a = 10;   //Identifier 'a' has already been declared
                console.log(a); 
        }

        console.log(a); 

*/
