// Task - 1
/* Predict out with reason  */

console.log("1");

setTimeout(function () {
  console.log("2");
}, 0);

Promise.resolve().then(function () {
  console.log("3");
});

console.log("4");

// Ans - 1 4 3 2
// Reason : It's base on Event Loop. Frist exexute sync. code. so frist print 1 then setTimeout is arrived put that into
// macrotask queue. now futher promise are arrive so it put into microtask queue and then print 4. now code is over. so
// it check in microtask queue there is one promise which have resolve so that print 3. now microtask queue is empty
// so it check macrotask queue there one setTime are there now it execute.

/* *************************************************************************************************************** */

// Task - 2

console.log("Start");

setTimeout(function () {
  console.log("Timeout 1");
  Promise.resolve().then(function () {
    console.log("Promise 1");
  });
}, 0);

Promise.resolve().then(function () {
  console.log("Promise 2");
  setTimeout(function () {
    console.log("Timeout 2");
  }, 0);
});

// console.log("End");

// Ans - Start End Promise 2 Timeout 1 Promise 1 Timeout 2
// It's also base on Event Loop. first js execute all synchronous code. So first console.log("Start") execute and it print
// Start,then setTimeout arrive so it is async so it not execute now and it put into macrotask queue. after that Promise
//  arrived, promise go into microtask queue. then next sync line console.log("End") execute and it print End.
// now it check microtask queue first. there is one promise, so it execute and print Promise 2.Inside this that
// one there is one setTimeout, so that go into macrotask queue. for now microtask queue is empty.then next check macrotask
// queue.there is first Timeout 1, so it execute and print Timeout 1. inside Timeout 1 there is one promise, so that
//  promise go into microtask queue. now timeout 1 code is finished, so again event loop check microtask queue.There
// is one Promise, so it execute and print Promise 1.now microtask queue is empty again.then it check macrotask queue
//  and there is Timeout 2, so it execute and print Timeout 2.

/* *************************************************************************************************************** */

// Task -3

Promise.resolve().then(function () {
  console.log("B");
  Promise.resolve().then(function () {
    console.log("C");
  });
  console.log("D");
});

Promise.resolve().then(function () {
  console.log("E");
});

setTimeout(function () {
  console.log("F");
}, 0);

console.log("G");

//Ans - G B D E C F
// Base On Event Loop. frist it push promise into Micro Task Queue. then again another promise arrived that also push
// into Microtask Queue. then SetTimeout arrive so that put into macrotask queue. and finally one sync. statement arrived
// console.log("G") that print G. now it's check microtask queue solve frist promise print B. now again one anoter 
// promise arrived put also put into a microtask queue. and check print D because it's sync statement. check Microtask 
// queue. there is 2 promise so execte it order and print E and C. then check macrotask queue and print F.

/* *************************************************************************************************************** */

// Task - 4
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");

// Ans - 1 7 3 4 5 2 6
// It’s base on Event Loop. frist it execute sync code so  print 1. then setTimeout arrive so it put
//  into macrotask queue. then queueMicrotask arrive so it put into microtask queue. then Promise
// arrive so that also put into microtask queue. then another setTimeout arrive so it put into macrotask queue. 
// and then sync statement console.log("7") execute and print 7.now main code is finished so it check microtask 
// queue first. there is one queueMicrotask so it execute and print 3. then next microtask is promise so it execute 
// and print 4. inside this promise one more queueMicrotask is created so that again put into microtask queue.
//  now again it check microtask queue and execute that and print 5.now microtask queue is empty so it check 
// macrotask queue. there is first setTimeout so it execute and print 2. then next setTimeout execute and print 6.

// Task 5

console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();

Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");

// Ans - Start Async 1 End Async 2 Promise 1 Timeout

// frist it execute sync code so console.log("Start") print Start. then asyncFunction() call, inside that 
// it print Async 1 frist. then it await  fro Promise so async function pause here and the remaining part 
// is put into microtask queue.then Promise arrive so that also put into microtask queue.then setTimeout arrive
//  so it put into macrotask queue.then last sync statement console.log("End") execute and print End.
// now main code is finished so it check microtask queue first. there is first async function continue so it 
// execute and print Async 2. then next microtask is promise so it execute and print Promise 1.
// now microtask queue is empty so it check macrotask queue. there is one setTimeout so it execute and print Timeout.