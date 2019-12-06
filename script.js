// #region variablesDeclaration
const usernameLogin = document.getElementById('usernameLogin');
const passwordLogin = document.getElementById('passwordLogin');
const usernameRegister = document.getElementById('usernameRegister');
const passwordRegister = document.getElementById('passwordRegister');
const emailRegister = document.getElementById('emailRegister');
const loginform = document.getElementById('login-form');
const registerform = document.getElementById('register-form');
const errorElementLogin = document.getElementById('errorLogin');
const errorElementRegister = document.getElementById('errorRegister');
// #endregion



loginform.addEventListener('submit', (e) => {
    let messages = []
    if (usernameLogin.value === '' || username.value == null) {
        messages.push('*Name is required')
    }

    if (passwordLogin.value.length < 8) {
        messages.push('*Password must be longer than 8 characters')
    }

    if (passwordLogin.value.length > 20) {
        messages.push('*Password must be less than 20 characters')
    }

    if (passwordLogin.value === 'password') {
        messages.push('*You cannot set your password as password')
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElementLogin.innerText = messages.join('\n')
    }
});

registerform.addEventListener('submit', (e) => {
    let messages = []
    if (usernameRegister.value === '' || username.value == null) {
        messages.push('*Name is required')
    }

    if (passwordRegister.value.length < 8) {
        messages.push('*Password must be longer than 8 characters')
    }

    if (passwordRegister.value.length > 20) {
        messages.push('*Password must be less than 20 characters')
    }

    if (passwordRegister.value === 'password') {
        messages.push('*You cannot set your password as password')
    }

    if(emailRegister.value === '' || email.value == null){
        messages.push("*Email is required")
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElementRegister.innerText = messages.join('\n')
    }
});

// function resetMyForm() {
//     let frm = document.getElementsByName("formClass")[0];
//     frm.submit();
//     frm.reset();
// }



$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});