/*
Problem: Async Data Aggregation Using Promises

You are required to fetch related data from multiple APIs and create a summary object.

Steps:
1. Fetch a user.
2. Fetch posts for that user.
3. Fetch comments for one of the posts.
4. Combine the results into a single summary object.



Output:
{
  user: "Leanne Graham",
  postCount: 10,
  commentCount: 5
}

Constraints:
- Use Promise.all 
- Use async/await 
- Handle errors properly.
- Return or log a summary object.
*/

async function apiCalling(url){
  try{
     const res = await fetch(url)
    const data = await res.json()
    return data
  }catch(err){
    console.error("Error :" , err.message);
  }
   
}

// function fetchUser(){
//   userPromise = new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve({username : "Hiren"})
//       },1000)
//   })
//   return userPromise
// }


async function getInfo(){
      // const userPromise = apiCalling('www.google.com')
      // const postPromise = apiCalling('www.google.com')
      // const commentPromise = apiCalling('www.google.com')

       const userPromise = apiCalling('https://jsonplaceholder.typicode.com/users/1')
      const postPromise = apiCalling('https://jsonplaceholder.typicode.com/users/1')
      const commentPromise = apiCalling('https://jsonplaceholder.typicode.com/users/1')
      

      const data = await Promise.all([userPromise,postPromise,commentPromise])
      console.log(data)
}

getInfo()