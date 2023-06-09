const inputEl = document.querySelector("#name-input")
const userNameOutputEl = document.querySelector("#name-output")
console.log(inputEl);
console.log(userNameOutputEl);
inputEl.addEventListener("input", (e) => {
    if (inputEl.value) {
    

        userNameOutputEl.textContent = e.target.value
        return
    }
    userNameOutputEl.textContent = 'Anonymous'
});
