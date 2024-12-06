var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var nameInput = document.getElementById("nameInput")
var btnLogin = document.getElementById("btnLogin");
var hide = document.getElementById("hide");
var hide2 = document.getElementById("hide2");
var show = document.getElementById("show");
var emailList = [];
if (localStorage.getItem("list") !== null) {
    emailList = JSON.parse(localStorage.getItem("list"));
}

function addEmail() {
    if (validtionEmail() && validtionPassord() && validtionName()) {
        var emailExists = emailList.some(function (emailObj) {
            return emailObj.email === emailInput.value;
        });

        if (emailExists) {
            alert("This email is already registered!");
            return; 
        }

        var email = {
            name : nameInput.value,
            email: emailInput.value,
            Password: passwordInput.value,
        };
        emailList.push(email);
        localStorage.setItem("list", JSON.stringify(emailList));
        clearEmail();
    }
}

function clearEmail() {
    nameInput.value = null
    emailInput.value = null;
    passwordInput.value = null;
}
function validtionName() {
    var regex = /^[a-z0-9_-]{3,15}$/;
    var text = nameInput.value;
    var hide = document.getElementById("hide");
    if (regex.test(text)) {
        hide.classList.add("d-none");
        return true;
    } else {
        hide.classList.remove("d-none");
        return false;
    }
}

function validtionEmail() {
    var regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    var text = emailInput.value;
    var hide = document.getElementById("hide");
    if (regex.test(text)) {
        hide.classList.add("d-none");
        return true;
    } else {
        hide.classList.remove("d-none");
        return false;
    }
}

function validtionPassord() {
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    var text = passwordInput.value;
    var hide = document.getElementById("hide");
    if (regex.test(text)) {
        hide.classList.add("d-none");
        return true;
    } else {
        hide.classList.remove("d-none");
        return false;
    }
}
