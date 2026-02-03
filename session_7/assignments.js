// Assignment 1
/* What is Ouput of below code and why ? */
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

// Ans - Dell --> because getBrand is Normal Function inside laptop. this of getBrand is refer to laptop object so 
// this.brand give Dell

/* ********************************************************************************************************* */

// Assignment 2
/* What is Ouput of below code and why ? */

console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

// Ans - 1,3,2 --> Because in console.log(1) is frist go to call stack that print 1
//  the Promise is Microtask so it push in to MicroTask Queue for resolve
// the normal excution going on so console.log(3) is print 3
// now there is no task in call task so now priority to Micro task so in microtask queue Promise is already resolve with 
// console.log(2) so last print 2

/* ********************************************************************************************************* */

//Assignment - 3

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

// Ans - Error Occurred
// Because --> If Promise is Reject then it directly go to .catch section

/* ********************************************************************************************************* */

// Assignment 4

// var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());

// Ans - Online
// Becaues --> getStatus is function inside the server object so if we return this.status it's refers to object properties 
// so in object status is a "Online" that's why it return Online.

/* ********************************************************************************************************* */

// Assignment - 5

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

// Ans -> 20// It's Promise chailling if frist Promise is resolve with 10 then result of that promise go to next as num and
//  then  peform Opration num*2 = 20. that also wrap inside a new promise for that next then() receive 20 as result and 
// print it.

/* ********************************************************************************************************* */

// Assignment - 6


const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
console.log(print===user.printName)
print();

// Ans - undefined
// in this case we copyig a entire function outside of a object so when we call print() then it's no longer call as method 
// of a object. we this in print it's refers to window object that's why it print undefined

/* ********************************************************************************************************* */

// Assignment - 7

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


// Ans - Start,End,Promise,Timeout
// It's same event Loop concept where sync. console.log are linearlly excute one after one as callstack order and 
// setTimeout push in to Macrotask queue and Promise push into MicroTask Queue after that Program Execute over then 
// Microtask resolve frist then Macrotask resolve.


/* ********************************************************************************************************* */

// Assignment - 8

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();

// Ans - undefined
// In this case getTitle is a arrow function so inside this 'this' keyword is refer a it's parent function scope we 
// there is not parent so it's auto. refere window object.

/* ********************************************************************************************************* */

// Assignment 9

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));


// Ans - 5,10
// Promise resolve as 5 already then it go to .then() in that print Val and return a new promise as val + 5 (10) so it's
//  another promise for that next then() take val from that and print it.

/* ********************************************************************************************************* */

// Assignment 10

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

// Ans - Fail and Recovered
// There is Promise are reject so it go in catch back there print our custom rejection Error. and then it return
//  "Recovered" it also wrapped in promise for that we also apply .then() to solved that promise and print "Recovered" 
// as res.


/* ********************************************************************************************************* */

// Assignment 11

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

// Ans - A E C D B
// It's Base on Event Loop Concept Frist Print A that normal execution in call stack then settimeout put into Macro Task
//  Queue.Promise Put into Micro task then move forward and print E.now Main call stack empty so that check Microtask Queue
//  there one Promise, solve and Print C. again promise arrived put into MicroTask Queue then Solve it and print D.Now 
// microtask queue is totally empty. so move macro task queue there is a settimeout wait to solved there is a 0 milli
//  second so Print B.

/* ********************************************************************************************************* */

// Assignment 12

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

// Ans - 101 undefined

// in call() is used to call a function and manually set the value of call. here we pass object as this so this.id refer 
// to agent.id
// apply() also calls the function but we pass null as this. so, it auto refer to window's object that's why there no id
//  so in print undefined

/* ********************************************************************************************************* */

// Assignment 13

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));

// Ans : Caught: Error 1
// In Promise.all there is 3 Promises. Property of Promise.all() is that it run all promises concurrent at time if
//  all promise are solve then return all results. but one of that failed then stop execution and directlly jump into
//  catch where show rejection error.

/* ********************************************************************************************************* */

// Assignment 14

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

// Ans - undefined
// updateScore() is contains a settimeout function and it also contains another function and in is we try to this.score
//  but settimeout put into macrotask and that run in brower that time this not refer a player object. and it refer  to
//  window object that why print undefined.

/* ********************************************************************************************************* */

// Assignment 15

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

// Ans - Caught Error 10
// There is a Promise are resolve in .then() we throw a error which this print in .catch() and print "Caught Error" 
// and return 10 as new promise for solve that we go into .then and print 10.


/* ********************************************************************************************************* */

// Assignment 16

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");


// Ans - C A D B
// base on Event Loop Frist print C regular execution the go into function and wait for resolve promise and put into 
// MicroTask Queue and then Move Forward and print D. Now See the MicroTask Queue there a Promise so after that solve 
// Print B.

/* ********************************************************************************************************* */

// Assigment 17

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));
    

// Ans: Cleanup Done
// in that code we call finally top of .then() so finally run frist.that print "CleanUp" the Execure a .then() and print
//  "Done" as res.

/* ********************************************************************************************************* */

// Assigment 18
console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

//  undefined 10
// frist execute console.log in that a. so in var acquire memory but not init. that's why that print undefined then
//  promise are push into MicroTask Queue. after that a is init. after Promise will resolved that again console a then
//  that print a.

/* ********************************************************************************************************* */

// Assignment 19

setTimeout(() => console.log("T1"), 0);
Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});
Promise.resolve().then(() => console.log("P2"));

console.log("End");

// Ans : End P1 P2 T1 T2
// Base on Event Loop There Frist Direct Executable line Console.log("End") in call Stack.But before that setTimeout 
// in go into MacroTask after that Promise go into Microtask, now frist prority is MicroTask so Promise can resolve 
// Print P1 and then another setTimeout go into MacroTask Queue but frist Excute setTimeout which come frist so print 
// T1. And Last execute setTimout Which have T2.


/* ********************************************************************************************************* */

// Assignment 20

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

// Ans - Sarah
// In case Print is Arrow Function and Arrow function does not have their this so that it refer his parent function's 
// this. Here that refer class's this because class's also one type of function.  
