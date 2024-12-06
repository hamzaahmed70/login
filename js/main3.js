var loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
    document.getElementById("userName").innerText = loggedInUser;
} else {
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem("loggedInUser"); 
    window.location.href = "index.html"; 
}