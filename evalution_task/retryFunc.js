async function retryFunction(url,count=3){
    if(count <=0){
        console.log("Your chances are over")
        return;
    }
    // way -1 to fetch data  --> async - await
    // try{
    //     let res = await fetch(url)
    //     // let data = await res.json()
    //     console.log(res)
    // }catch(err){
    //     count--
    //     console.log("your count is reduce.", count)
    //     retryFunction(url,count)
    // }

    // way 2 --> promises
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        count--
        console.log("your count is reduce.", count)
        retryFunction(url,count)
    })
}

// retryFunction("https://abc.fact")
retryFunction("https://dogapi.dog/api/v1/facts")