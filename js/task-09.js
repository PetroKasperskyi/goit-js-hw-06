function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 

const chengColorEl = document.querySelector("body");
const addColorSpanEl = document.querySelector(".color");
const chengColorBtnEl = document.querySelector(".change-color");

chengColorBtnEl.addEventListener("click", function () {
  const color = getRandomHexColor();
  chengColorEl.style.backgroundColor = color;
  addColorSpanEl.textContent = color;
})

