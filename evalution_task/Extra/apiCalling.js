// ! Part 1
/*
Problem: Simulate an API Call Using Promises

Create a function that simulates an API call and returns dummy data using a Promise.

The function should:
- Accept three parameters: data, delay (default 1000ms), and status (default true).
- Resolve the Promise with the provided data if status is true.
- Reject the Promise with an error message if status is false.
- Use setTimeout to simulate network delay.

Then:
- Create an async function that calls this simulated API function using async/await.
- Log the resolved response to the console.
- Handle the asynchronous behavior correctly.
*/

function MakeApiCall(data,status = true,delay = 1000){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(status){
                resolve(data)
            }else{
                reject("API IS NOT WORKING")
            }
        },delay)
    })
}

userData = { 
    id: 1,
    name: "Leanne Graham" 
}

const userDetails = async() =>{
    try{
        let res = await MakeApiCall(userData,status = false)
        console.log(res);
    }catch(err){
        console.log("Error:",err);
    }
}

userDetails()