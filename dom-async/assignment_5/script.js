// Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.


function downloadFile(url,callback){
  setTimeout(function (){
    console.log("Download complete:"+url)
    callback()
  },3000)
}

downloadFile("www.abc.com",()=>{
  console.log("callback executed after download")
})