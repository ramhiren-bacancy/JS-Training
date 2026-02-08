// Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.

function simulateTask(name,delay){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(`${name} completed`)
      resolve(name)
    },delay)
  })
}

// part 1
async function usingAsyc(){
  await simulateTask("Task 1",1000)
  await simulateTask("Task 2",1000)
  await simulateTask("Task 3",1000)
}

usingAsyc();


// part 2
async function usingAll(){
  await Promise.all([
    simulateTask("Task 1",2000),
    simulateTask("Task 2",2000),
    simulateTask("Task 3",2000)
  ]);
}

usingAll();


// part 1 takes 6s
// part 2 takes 2s 