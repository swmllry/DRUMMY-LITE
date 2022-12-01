

export const passwordVerification = (event) => {
    passwordLength(event)
    passwordMatch(event)
}

const passwordLength = (event) => {

    const password = document.getElementById("password");

    if (password.value.length >= 10) {
        return true;
    } else {
        window.alert('Password must be at least 10 characters')
        return false;
    }

};

const passwordMatch = (event) => {

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword")

    if (password.value === confirmPassword.value) {
        return true;
    } else {
        window.alert('Passwords do not match')
        return false;
    }

}

