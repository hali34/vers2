// Include EmailJS SDK
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';

// Initialize EmailJS once the SDK is loaded
script.onload = function() {
    // Initialize EmailJS with your public key
    emailjs.init({
        publicKey: "yz3hLbzpAMj6y2KsC",
    });

    // Handle form submission after the SDK is loaded and EmailJS is initialized
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch form data
        const formData = new FormData(contactForm);

        // Send an email using EmailJS
        emailjs.send("service_mth270i", "template_uabjuev", {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
        }).then(function(response) {
            console.log("Email sent successfully", response);
            alert("Form submitted successfully!");
            contactForm.reset(); // Reset the form
        }).catch(function(error) {
            console.error("Email could not be sent", error);
            alert("Failed to submit form. Please try again later.");
        });
    });
};

document.head.appendChild(script);
