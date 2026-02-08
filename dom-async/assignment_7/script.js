// Create a function tossCoin() that returns a Promise.
// Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
// Consume the promise using .then() and .catch().


function tossCoin(){
  return new Promise(function(resolve,reject) {
    const a = Math.random()

    if (a>0.5) {
      resolve("Head")
    } else {
      reject("Tail")
    }
  })
}

tossCoin()
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  });
