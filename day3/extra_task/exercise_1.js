// You receive user emails from a form. Some contain uppercase letters and spaces.

let a = [" John@GMAIL.com ", "ADMIN@Company.COM", " user@test.com "]
let b = []

for (const i of a){
    b.push(i.toLowerCase().trim())
}

console.log(b);