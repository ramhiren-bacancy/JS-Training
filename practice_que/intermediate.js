// Predict the output of the following code and explain why it behaves that way.

console.log(a);

var a = 10;

if (true) {
  let a = 20;
  console.log(a);
}

console.log(a);

// output : undefined 20 10
// Why : var is hoisted. At Execution context first phase in memory creation phase that var a is assigned as undefined
// in second case there is showding in outer scope we declar var and inner we declar let with same varible name so in memory
// they both are diffrent varibles.

/* ********************************************************************************************************************* */

// Predict the execution order of the following code and explain why.

console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");

// Output: start end promise1 promise2 timeout
// Why : Base on Event Loop concept.
// sync code - start
// macro task - timeout
// micro task - promise 1
// micro task - promse 2
// sync code  - end

/* ********************************************************************************************************************* */

// Fetch data from an API and transform it using modern JavaScript array methods.
// Input :
// Assume the API returns the following data:
// [
//   { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Neha", active: false }
// ]

// Requirements :
// Fetch data using fetch
// Handle API failure gracefully
// Filter only active users


// Transform data into the format:
// { userId: 1, userName: "Amit" }

// Expected Output
// [
//   { userId: 1, userName: "Amit" }
// ]


async function fetchData(){
    try{
        const res = await fetch('https://gorest.co.in/public/v2/users')
        const data = await res.json()
        
        console.log(data.length);
        // console.log(data);

        const final_result = data
        .filter((i)=>i.status == 'active')
        .map((i)=>{
            const {status,...new_i} = i
            return new_i
        })

        console.log(final_result);
        
    }catch(err){
        console.log("ERROR :" ,err);
    }
}

fetchData()