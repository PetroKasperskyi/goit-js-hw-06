const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", function () {
    const inputValue = validationInputEl.value.trim().length;
    const totalLength = parseInt(this.getAttribute("data-length"))
    if (inputValue === totalLength) {
        validationInputEl.classList.add("valid");
        validationInputEl.classList.remove("invalid")
        return;
    }
    else 
        validationInputEl.classList.remove("valid")
        validationInputEl.classList.add("invalid");
      
}) 
