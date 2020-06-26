function sendMail(contactForm) {
    emailjs.send("gmail", "experience_297", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            alert("Your Submission Has Been Successfully Processed", response);
        },
        function(error) {
            alert("Oops, Let's Review The Sign Up Experience", error);
        }
    );
    return false;  // To block from loading a new page
}