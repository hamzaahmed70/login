var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var btnLogin = document.getElementById("btnLogin");
var hide = document.getElementById("hide");
var hide2 = document.getElementById("hide2");

var emailList = [];
if (localStorage.getItem("list") !== null) {
    emailList = JSON.parse(localStorage.getItem("list"));
}

function addEmail() {
    if (validtionEmail() && validtionPassord()) {
        var emailExists = emailList.some(function (emailObj) {
            return emailObj.email === emailInput.value && emailObj.Password === passwordInput.value;
        });

        if (emailExists) {
            var loggedInUser = emailList.find(function (emailObj) {
                return emailObj.email === emailInput.value;
            });
            localStorage.setItem("loggedInUser", loggedInUser.name); 
            window.location.href = "welcome.html";
        } else {
            alert("Incorrect email or password!");
        }
    }
}

function clearEmail() {
    emailInput.value = null;
    passwordInput.value = null;
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
    var hide2 = document.getElementById("hide2");
    if (regex.test(text)) {
        hide2.classList.add("d-none");
        return true;
    } else {
        hide2.classList.remove("d-none");
        return false;
    }
}
