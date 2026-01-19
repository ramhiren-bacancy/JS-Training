let a =  [100, 200, 50]

let sum = a.reduce((acc,i) =>{
    return acc += i
},0)

console.log(sum);