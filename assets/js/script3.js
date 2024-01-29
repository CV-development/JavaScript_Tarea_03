const key = document.getElementById("key")
let color = "white"

document.addEventListener('keydown', function (event) {
  if (event.key === "a") {
  color = "pink"
  key.style.backgroundColor = color
  } else if (event.key === "s") {
    color = "orange" 
    key.style.backgroundColor = color
  } else if (event.key === "d") {
    color = "skyblue"
    key.style.backgroundColor = color
  } else if (event.key === "q") {
    crearDiv("purple")
  } else if (event.key === "w") {
    crearDiv("grey")
  } else if (event.key === "e") {
    crearDiv("brown")
  }
})

crearDiv = (newColor) => {
  const newDiv = document.createElement("div")
  newDiv.style.width = "200px"
  newDiv.style.height = "200px"
  newDiv.style.backgroundColor = newColor
  newDiv.style.width = "200px"
  document.body.appendChild(newDiv)
}
 