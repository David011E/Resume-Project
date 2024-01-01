function sendMail(contactForm) {
    emailjs.send('service_ic363dd', 'rosie', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status);
        // Reset the form after successful submission
        contactForm.reset();
    }, function(error) {
       console.log('FAILED...', error);
    });
    return false  // To block from loading a new page
}