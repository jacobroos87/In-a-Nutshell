function sendMail(contactForm) {
        emailjs.send("gmail", "nutshell", {
            "from_name": contactForm.firstname.value + contactForm.lastname.value,
            "from_email": contactForm.emailaddress.value,
            "form_comment": contactForm.formcomment.value,
        })
            .then(
                function (response) {
                    console.log("SUCCESS", response);
                },
                function (error) {
                    console.log("FAILED", error)
                }
            )
    }