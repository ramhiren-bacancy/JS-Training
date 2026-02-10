let arr:number[] = [1,2,3,4,5]

function sum(arr:number[]):number{
    let sum:number=0
    arr.forEach((i)=>{
        sum += i
    })
    return sum
}

console.log(sum(arr))


// Question 2
function another(a:number,b:number):string|number{
        if(a+b>100){
            return "Sum is greate than 100"
        }
        return a+b
}

console.log(another("1",2))

// what happend if you pass a string?
// it's run successfully also reflect js file also.  But warning msg show in console.
// error :index.ts:22:21 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.