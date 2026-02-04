// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts?userId=1
// https://jsonplaceholder.typicode.com/comments?postId=1

/*
Task 1: Fetch User, Posts, and Comments

Write an async function that:
- Fetches a user from the API endpoint: /users/1
- Extracts the user id from the response
- Fetches all posts for that user using the endpoint: /posts?userId={id}
- Selects one post from the fetched posts
- Fetches all comments for the selected post using the endpoint: /comments?postId={postId}

The function should:
- Validate each API response and throw an error if:
  - User data is not found
  - Posts data is empty or not found
  - Comments data is empty or not found
- Log the fetched user, posts, and comments to the console
- Handle errors using try/catch
*/


/*
Task 2: Aggregate Post and Comment Data

Using the data fetched in Task 1:

Write logic to:
- Extract all post IDs belonging to the user
- For each post ID, fetch its related comments from the API
- Count the number of comments for each post
- Store the results in an array of objects where each object maps:
  { postId: commentCount }

Finally, create a summary object that contains:
- userId
- total number of posts
- an array of comment counts per post

Example Output:
{
  userId: 1,
  Posts: 10,
  comment: [
    { 1: 5 },
    { 2: 5 },
    { 3: 5 },
    ...
  ]
}

The solution should:
- Use async/await for all asynchronous operations
- Handle errors properly
- Log the final summary object to the console
*/


async function fetchInfo(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(userData);
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
}

async function getData(url) {
  try {
    //! Task 1
    userData = await fetchInfo(url + "users/1");
    let { id } = userData;
    if(!userData) throw new Error("User Not Found")

    postData = await fetchInfo(url + `posts?userId=${id}`);
    if(!postData || postData.length==0) throw new Error("Post Not Found")
    let postId = postData[1].id

    commentData = await fetchInfo(url +`comments?postId=${postId}`)
    if(!commentData || commentData.length == 0) throw new Error ("No Comment Found")

    console.log(userData,postData,commentData);


    //!Task 2 
    
    let postIds = postData.map((post) => post.id);

    let commentCount = []

    for(postid of postIds){
        const d = await fetchInfo(url + `comments?postId=${postId}`);
        commentCount.push({ [postid] : d.length})
    }


    let result = {
      userId: id,
      Posts : postIds.length,
      comment :commentCount
    };
    console.log(result);
  } catch (err) {
    console.log("Error: ", err);
  }
}


getData("https://jsonplaceholder.typicode.com/");
