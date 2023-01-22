import "./styles.css";
const body = document.querySelector("body");
console.log(window.innerWidth);

function changeBackground() {
  const bodyWidth = window.innerWidth;
  if (bodyWidth > 900) {
    body.classList.remove("purple");
    body.classList.add("yellow");
  } else if (bodyWidth > 700) {
    body.classList.remove("yellow");
    body.classList.add("purple");
  } else {
    body.classList.remove("purple");
  }
}

window.addEventListener("resize", changeBackground);
