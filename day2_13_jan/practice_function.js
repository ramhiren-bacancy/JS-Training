
// a() //simple run 
// b() //type error


// function statement / function declaration
function a(){
    console.log('a called!!');
}
// a() //simple run

// function expression
var b = function(){
    console.log('b called');
}
// b() // simple run



//anonymous function - SyntaxError 
// function () {
//     console.log('Hello');
// }

var c = function () {
    console.log('Hello');
}

// Named Function Expression
var d = function xyz(){
    console.log('From XYZ');
}

// d()
// xyz() - ReferenceError: 


// parameter and arguments

var e = function(p1,p2){  // parameter 
    console.log(p1,p2);
}

// e(1,2) //arguments



//Frist class Function --> passing a function in another function
function pqr(p1){
    console.log(p1);
}
function abc(){

}

pqr(abc)