// Create a button with text "Clicks: 0".
// Initialize a variable count = 0.
// On each button click, increment count and update the button text accordingly.


let count = 0

const btn =document.getElementById("btn")

btn.addEventListener("click",()=>{
  count++;
  btn.textContent = "Clicks:"+count
})
