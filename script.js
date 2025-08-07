// Smooth navigation scroll
document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function(e) {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            // Update active class
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    }
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name.length < 2) {
        nameError.textContent = "Please enter at least 2 characters.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('messageError');
    if (message.length < 5) {
        messageError.textContent = "Message should be at least 5 characters.";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    // If valid, show success (no backend to actually send)
    if (valid) {
        document.getElementById('formSuccess').textContent = "Thank you for contacting us! We will respond soon.";
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formSuccess').textContent = "";
    }
});
