
// this refers to the object that is calling the function
// Value of this changes based on how a function is called
// In browser -> this refers to window
// Arrow functions do NOT have their own this and Arrow function takes this from parent scope




/* let a =10
x()
y()
z() 

function x(){
    var a =20
    console.log(this.a);
}

function y(){
    console.log(this.a);
    
}
const z = ()=>{ // refereance error : z can't access before initialization - arrow function
    console.log(this.a);
}
 */

var doc = "this keyword doc";
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
console.log(obj.IIFEArrow)

