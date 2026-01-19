let a =  [-10, 20, 50, -5]

let b = a.filter(i =>
    i>0
).map(i => i*2)

console.log(b);