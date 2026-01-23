
// ! Shallow copy
const user = {
  name: "Alex",
  address: {
    city: "Delhi"
  }
};

const copy = { ...user };

console.log(copy == user); // false -both different but there inner varible and obj are refere same memory location  
console.log(copy.name == user.name);
console.log(copy.name === user.name); //true - same location 
console.log(copy.address == user.address); // true same location
console.log(copy.address === user.address);
console.log(copy.name === user.name);
// Outer object is new
// Inner object is same reference

copy.name = "Bob"
console.log(user.name); // Alex - it's primitive datatype. it's not 

copy.address.city = "Mumbai"
console.log(user.address.city); // Mumbai - bcz point same memory location
//? use - spared oparator , slice , Object.assign({} , obj)

/* Mamory: 

Primitive:
  user.name ----> "Alex"
  copy.name ----> "Bob"      (new value)

Non-Primitive:
  user.address ----┐
                    ├──> { city: "Mumbai" }
  copy.address ----┘

*/

/* 5 == "5"     // true
true == 1    // true
false == 0  // true
null == undefined // true
"" == 0      // true
[] == 0      // true
[] == ""     // true 

Memory reference is different
{} === {}     // false
[] === []     // false

Objects are compared by reference, not value
const a = {};
const b = a;

a === b // true

const a = {};
const b = {};

a == b //false
a === b // false


null == undefined   // true
null === undefined  // false

NaN == NaN  // false

Number.isNaN(NaN); // true

+0 === -0 // true

*/



//! Deep Copy

const user1 = {
  name: "Alex",
  address: {
    city: "Delhi"
  }
};

const deepCopy = {
  ...user,
  address: { ...user.address }
};


console.log("WE ARE IN DEEP COPY");
console.log(deepCopy.address === user1.address);

/* 
user       ---> address ---> { city }
deepCopy  ---> address ---> { city }
*/

deepCopy.name = "Bob"
console.log(user1.name); //Alex 

deepCopy.address.city = "Mumbai";
console.log(user1.address.city); // "Delhi"

// ? use - nested spared , JSON.parse(JSON.stringify(obj)) , structuredClone(obj)


// Execise -1 
/* const ex = {
  a: 1
};

const exCopy = ex;

exCopy.a = 10;

console.log(ex.a); */

//===================================================================================================================

// Exercise -2
/* const originalObj = {
  a: { x: 1 }
};

const copyObj = { ...originalObj };
copyObj.a = { x: 100 }; // we Dont't replace x see carefully we replace a - and is primitive

console.log(originalObj.a.x); //didn't change
console.log(originalObj);
console.log(copyObj); */


//===================================================================================================================
const originalObj = {
  x: 1,
  greet() {
    console.log("Hi");
  }
};

const copyObj = JSON.parse(JSON.stringify(originalObj));

console.log(copyObj.greet); //! undefined
// !JSON deep copy removes functions, undefined, symbols, etc.
