const formEl = document.querySelector(".login-form")
formEl.addEventListener("submit", submitHendler);

const profile = {};
function submitHendler(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value === '' || password.value === '') {
        alert('Fill all fields!!!');
    }
    else {
        profile.email = email.value;
        profile.password = password.value;
        console.log(profile)
        event.currentTarget.reset()
    }
};