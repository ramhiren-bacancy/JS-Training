// Task 1
// Create a function that logs numbers 1 to 5, with a 1-second delay between each number.
// Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)

function countWithDelay(limit) {
    for(let i = 1;i<=limit;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}

// countWithDelay(5);

// Task 2:
// BUGGY CODE - Fix this
// Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.
// for (var i = 0; i < 3; i++) {
//  setTimeout(function() {
//    console.log(i); // Currently logs: 3, 3, 3
//  }, 1000);
// }

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Currently logs: 3, 3, 3
  }, 1000);
}

// Use "let" instand of "var" --> Reason because var in functional scope that's it create not new i for every interval
// But let is block scope that create i every interval

// Task 3:
// Create a countdown timer that counts from 10 to 0, then stops.
// Like 10,9,8,7,....,0

function countdown(s) {
    for (let i = s; i >=0; i--) {
        setTimeout(()=>{
            console.log(i);
        },(s-i)*1000)
    }
}

countdown(10)
