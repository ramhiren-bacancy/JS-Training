// 2. JS: Convert Promise Chain to async/await

// Description
// You are given a function implemented using Promise chaining.
// Rewrite the same logic using async / await .
// Do not change the behaviour.
// Existing code:

// function getUserPostTitles(userId) {
// return fetch(`/users/${userId}`)
// .then(res => res.json())
// .then(user => {
// return fetch(`/posts?userId=${user.id}`);
// })
// .then(res => res.json())
// .then(posts => {
// return posts.map(p => p.title);
// });
// }

// Rewrite the above function using async / await .
// Constraints
// Use async / await
// Do not use .then() or .catch()
// Behaviour must remain the same
// Return the same result


async function getUserPostTitles(userId) {
    try{
        const userResponse = await fetch(`/users/${userId}`)
        const user = await userResponse.json()

        const postsResponse = await fetch(`/posts?userId=${user.id}`)
        const posts = await postsResponse.json()

        return posts.map(p => p.title)
    }catch(e){
        console.log("Error",e)
    }
}