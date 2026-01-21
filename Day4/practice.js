// Stack Memory:
/* 
Stores primitive values and function call information
Memory is small, fast, and managed automatically
Uses LIFO


Stored in Stack
    number, string, boolean, null, undefined, symbol, bigint    
    Function execution contexts
    References (addresses) to heap object
*/

//Heap Memrory
/* 
Stores objects, arrays, functions
Memory is large, flexible
Managed by Garbage Collector (GC)

Stored in Heap
    Objects { },Arrays [ ],Functions,Closures
*/

let user = {
  id: 101,
  name: "Alice",
  role: "Admin",
};

// Stack: user → reference (address)

// Heap: { id: 101, name: "Alice", role: "Admin" }

let user1 = { name: "Alice" };
let user2 = user1;
user2.name = "Bob";

// console.log(user1.name); // Bob - bcz both refer same memory

// Shallow Copy:
//  refer same obj in heap
//  spared is shallow copy
// changes - if properties is primitive No change -stack
//           if properties is Non-primitive Chnage -heap

// deep copy:
// The new object and the original object have absolutely no shared references, meaning changes in one will never affect the other.
// const deepCopy = structuredClone(originalObj);
// JSON.parse(JSON.stringify())

let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
copiedArray.push(4);
console.log(originalArray); // [1,2,3],


let config = { timeout: 1000, maxRetries: 3 };
let newConfig = { ...config, timeout: 500 }; // Copy and override
console.log(newConfig); // Output: { timeout: 500, maxRetries: 3 }
console.log(config);  //{ timeout: 1000, maxRetries: 3 }
