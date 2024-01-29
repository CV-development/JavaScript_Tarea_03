const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")

const changeBackgroundColor = (event) => {
  event.target.style.backgroundColor = "black";
}

box1.addEventListener("click", changeBackgroundColor)
box2.addEventListener("click", changeBackgroundColor)
box3.addEventListener("click", changeBackgroundColor)
box4.addEventListener("click", changeBackgroundColor)

let newColor = "";

document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
  /* Cambiar a color 1 */
  } else if (event.key === 's') {
  /* Cambiar a color 2 */
  }
  })