//  Create a <div> with a black border and white background.
// Define a CSS class .active that changes the background to green and text color to white.
// On click, toggle the .active class using classList.toggle().


const box = document.querySelector(".box")

box.addEventListener("click",function(){
  box.classList.toggle("active")
})