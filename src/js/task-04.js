const counterContainerEl = document.querySelector("#counter");

const counterValue = document.querySelector("#value");

const decrementBtnEl = counterContainerEl.firstElementChild;

const incrementBtnEl = counterContainerEl.lastElementChild;

let value = 0;

incrementBtnEl.addEventListener("click", function () {
    value += 1
    counterValue.textContent = value
}
);
decrementBtnEl.addEventListener("click", function () {
    value -= 1
    counterValue.textContent = value
}
);












// const valueEl = document.querySelector("#value")
// console.dir(valueEl)
// let counterValue = "0";
//  decrementBtnEl.addEventListener("click", (counterValue) => valueEl.textContent -= "1")
// incrementBtnEl.addEventListener( "click", (counterValue) => valueEl.textContent += co )