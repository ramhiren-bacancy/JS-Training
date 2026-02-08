// Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result

const promise = new Promise((resolve)=>{
  resolve(5)
})
  .then((a)=>{
    return a*2
  })
  .then((b)=>{
    return b+20
  })
  .then((c)=>{
    console.log(c)
  })

