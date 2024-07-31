document.addEventListener('DOMContentLoaded', function(){
    console.log("Document loaded");
});

function validateEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        alert("Valid email ID");
    } else {
        alert("Invalid email ID");
    }
}
