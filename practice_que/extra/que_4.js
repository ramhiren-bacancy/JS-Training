// Check if two strings are anagrams

function isAnagrams(str1, str2){
    const t1 = str1.split("").sort().join("")
    const t2 = str2.split("").sort().join("")
    console.log(t1 == t2)
}

isAnagrams("cat","tacx")


// Group Anangram:

function groupAnangram(strs){
    
    const ans = strs.reduce((acc,curr)=>{
        const n = curr.split("").sort().join("")

        if(!acc[n]){
            acc[n] = []
        }
        acc[n].push(curr)

        return acc
    },{})
    

    return Object.values(ans);
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnangram(words))