// Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
// Call them in sequence using nested callbacks.
// Log "All steps finished" only after step3 completes.


function step1(callback){
  setTimeout(()=>{
    console.log("step 1 completed")
    callback()
  },1000)
}

function step2(callback){
  setTimeout(()=>{
    console.log("step 2 completed")
    callback()
  },1000)
}

function step3(callback){
  setTimeout(()=>{
    console.log("step 3 completed")
    callback()
  },1000)
}

step1(()=>{
  step2(()=>{
    step3(()=>{
      console.log("All steps finished")
    })
  })
})
