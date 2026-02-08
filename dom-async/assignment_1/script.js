// Create an HTML file with a paragraph <p id="secret-message">Initial Text</p> and a button.
// On button click, select the paragraph using getElementById and change its text to "You found the secret message!".

const button = document.getElementById("btn")

button.addEventListener("click",function(){
  const p = document.getElementById("secret-message")
  p.textContent = "You found the secret message!"
})
