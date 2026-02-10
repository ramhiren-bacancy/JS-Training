let saveBtn = document.getElementById("save-btn")
let loadBtn = document.getElementById("load-btn")
let localResult = document.getElementById("local-result")
let sessionResult = document.getElementById("session-result")

saveBtn.addEventListener("click", () => {
        const name = document.getElementById("name").value
        localStorage.setItem("name", name)
        sessionStorage.setItem("name", name)
});

loadBtn.addEventListener("click",()=>{
    const localValue = localStorage.getItem('name')
    const sessionValue = sessionStorage.getItem('name')

    localResult.innerText = "Local Value: "+localValue
    sessionResult.innerText = "Session Value: "+sessionValue  
})


// What happend on page refresh ?
// --> Nothing, Both value retrived successfully

// what happend when the tab is closed ?
//  localvalue : hiren
//  sessionvalue : null