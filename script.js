const password = document.querySelector(".password-input");
const confirmPassword = document.querySelector(".confirm-password-input");
const invalidPassword = [
    ...document.querySelectorAll(".password-validation-invalid"),
];
const validatePassword = function () {
    if (password.value !== confirmPassword.value || password.value == "") {
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        invalidPassword.forEach((span) => {
            span.classList.add("password-validation-invalid");
            span.classList.remove("password-validation-valid");
        });
    } else {
        password.style.border = "2px solid green";
        confirmPassword.style.border = "2px solid green";
        invalidPassword.forEach((span) => {
            span.classList.remove("password-validation-invalid");
            span.classList.add("password-validation-valid");
        });
    }
};

password.addEventListener("keyup", validatePassword);
confirmPassword.addEventListener("keyup", validatePassword);
