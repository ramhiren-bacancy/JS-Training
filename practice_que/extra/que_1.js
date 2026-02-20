// Frist Not repeat Char. 


str = "aabccbcrd"
a ={}

for(let i =0;i<str.length;i++){
    if(!a[str.charAt(i)]){
        a[str.charAt(i)] = 0
    }
    a[str.charAt(i)]++
}

for(let i=0;i<str.length;i++){
    if(a[str.charAt(i)] == 1) {
        console.log(str.charAt(i))
        break
        
    }
}
console.log(a)