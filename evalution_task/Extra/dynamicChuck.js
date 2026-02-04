/* Write a function that chunks an array whenever a predicate changes.
Constraints
    Use reduce
    No loops
[1,1,2,2,2,3,1], --> [[1,1,1], [2,2,2], [3]] */

const a = [1,1,2,2,4,5,2,3,1,4]

const chuncks = a.reduce((acc,ele,i)=>{
    let isIn = false
    for(y of acc){
        if(y[0] == ele){
            isIn = true
            y.push(ele)
        }    
    }
    if(isIn == false){
        acc.push([ele])
    }
    return acc
},[])

console.log(chuncks);