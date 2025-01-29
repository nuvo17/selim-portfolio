const menu = document.getElementById('menu');

menu.addEventListener('click', function()  {
    const menuLinks = document.getElementById('navLinks');
    menu.classList.toggle('fa-x');
    menuLinks.classList.toggle('show')
    // alert('button clicked')

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

    else {
        alert('Message Sent')
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('number').value = '';
        document.getElementById('message').value = '';
    }
});
