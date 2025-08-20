document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 


    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();


    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");


    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;


    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }


    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }


    if (message === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }


    if (isValid) {
        alert("✅ Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});
