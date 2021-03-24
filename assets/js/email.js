// Send Email
function sendMail(contactForm) {
    emailjs.send("Gmail","HoliDreams", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "info_request": contactForm.subject.value, 
        
    })
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("fail", error);
        }
    );
    return false; 
}

