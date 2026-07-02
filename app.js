let btn = document.getElementById("btn")
let body = document.querySelector("body")

btn.addEventListener('click',()=>{
   body.classList.toggle("dark-light")
})