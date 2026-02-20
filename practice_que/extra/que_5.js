function isOddEven(n){
    if(typeof n == "number" && !Number.isNaN(n)){
        if(n%2 == 0) return "Even"
        return "Odd"
    }
    return "Not a Number"
}


console.log(isOddEven(5))
console.log(isOddEven(null))