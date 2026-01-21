
// this refers to the object that is calling the function
// Value of this changes based on how a function is called
// In browser -> this refers to window
// Arrow functions do NOT have their own this and Arrow function takes this from parent scope

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(this.a); // 10
// console.log(this.b); // undefined
// console.log(this.c); // undefined


/* let a =10
x()
y()
z() 

function x(){
    var a =20
    console.log(this.a); //10
}

function y(){
    console.log(this.a); //10
    
}
const z = ()=>{ // refereance error : z can't access before initialization - arrow function
    console.log(this.a);
}
 */

/* var doc = "this keyword doc";
const obj = {
    doc:'JS',
    printName: function(){
        return this.doc
    },
    printNameArrow: () => {
        return this.doc
    },
    IIFE: (function(){
        // console.log(this)
        return this.doc
    })(),
    IIFEArrow: (() => {
        // console.log(this)
        return this.doc
    })()
}
console.log(obj.printName()) 
console.log(obj.printNameArrow()) 
console.log(obj.IIFE) 
console.log(obj.IIFEArrow) */

// "this" is refer parent obj /coller obj.
// "this" in arrow function refers there parent function scope if parent function scope is not find so it's refer window



// const user = {
//   name: "Alex",
//   greet() {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// user.greet(); // undefined
// bcz - setTimeout run on client side so refer window object but in window this.name is not defined


const user = {
  name: "Alex",
  greet() {
    setTimeout( () => {
      console.log(this.name);
    }, 1000);
  }
};

user.greet(); // Alex

// bcz - arrow function doesn't have own this so it refer it's parent function as this in greet() that refer name ="alex"