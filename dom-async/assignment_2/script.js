// Create three <div> elements with the class box.
// Select all boxes using querySelectorAll and change the background color of each box to lightblue using forEach.


const boxes = document.querySelectorAll(".box")

boxes.forEach((box)=>{
  box.style.backgroundColor = "lightblue"
})