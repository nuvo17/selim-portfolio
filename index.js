const menu = document.getElementById('menu');

menu.addEventListener('click', function()  {
    const menuLinks = document.getElementById('navLinks');
    menu.classList.toggle('fa-x');
    menuLinks.classList.toggle('show')
    // alert('button clicked')

})

const downloadCV = document.getElementById('downloadCV');
downloadCV.addEventListener('click', ()=> {

    const Resume = document.createElement('a')
    Resume.href = 'Resume.pdf';
    Resume.download = 'Resume.pdf';

    document.body.appendChild(Resume);
    Resume.click();
    document.body.removeChild(Resume);
})

// form and email validation

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;

    if (username === '' || email === '' || number === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    const templateParams = {
        name: username,
        email: email,
        number: number,
        message: message
    };

    emailjs.send('service_4subcjb', 'template_qm676wd', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message Sent Successfully');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('number').value = '';
            document.getElementById('message').value = '';
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});
