/*
Problem: Chunk an Array

Write a function chunkArray(arr, size) that:
 Splits an array into smaller arrays (chunks) of a given size.
 Returns a new array containing these chunks.
 Uses Array.prototype.reduce().
 Uses slice or index-based logic.
 Does NOT use loops (for, while).
 Does NOT mutate the original array.

Example :
Input :  ([1, 2, 3, 4, 5], 2)
Output : [[1, 2], [3, 4], [5]]

Constraints:
- size will always be greater than 0.
- Original array should not be mutated.
*/

// function ArrayChuck(a,size){
   
//     let b = a.reduce((acc,i)=>{
//         if(a.indexOf(i)%size == 0){
//             acc.push(a.slice(a.indexOf(i),a.indexOf(i)+size))
//         }
//         return acc
//     },[])
//     return b
// }

function ArrayChuck(a,size){
   
    let b = a.reduce((acc,curr,i)=>{
        console.log(i)
        if(i%size == 0){
            acc.push(a.slice(i,i+size))
        }
        return acc
    },[])
    return b
}

console.log(ArrayChuck([1, 2, 3, 4, 5], 2));
console.log(ArrayChuck([1, 2, 3, 4, 5,6], 2));
console.log(ArrayChuck([1, 2, 3, 4, 5,4,1,2], 3));
console.log(ArrayChuck([1, 2, 3, 4], 4));
console.log(ArrayChuck([1, 2, 3, 4], 5));


// concept:
// array.reduce((accumulator, currentValue, index, array) => {
// logic
// }, initialValue);