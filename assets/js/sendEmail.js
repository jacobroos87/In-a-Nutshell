$(document).ready(function () {
    $(document).on('submit', '#contact_form', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_34hzmeb', 'contact_form', '#contact_form')
            .then(function () {
                $("#mySuccessModal").modal("show");
                console.log("SUCCESS");
            }, function (error) {
                alert("Your submission failed please try again")
                console.log("FAILED", error)
            })
    })
})
