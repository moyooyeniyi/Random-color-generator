let hex = document.querySelector(".hex")
let btn = document.querySelector(".generate")




let generateColor = () =>{
let newColor = Math.random().toString(16).substring(2, 8)

document.body.style.backgroundColor = "#" + newColor
hex.innerHTML = "#" + newColor

}
generateColor()
btn.addEventListener("click", generateColor)