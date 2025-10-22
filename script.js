const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  const isClickInsideMenu = navLinks.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    navLinks.classList.remove('active');
  }
});

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let hasErrors = false;

    document.querySelectorAll('.error').forEach(span => span.textContent = '');
    successMessage.classList.remove('show');

    // if (name === '') {
    //   document.getElementById('name-error').textContent = 'Full name is required.';
    //   hasErrors = true;
    // }
    const name = form.fullname.value.trim();
    const nameParts = name.split(/\s+/);

    if (name === '') {
        document.getElementById('name-error').textContent = 'Full name is required.';
        hasErrors = true;
    } else if (nameParts.length < 2) {
        document.getElementById('name-error').textContent = 'Please enter both first and last name.';
        hasErrors = true;
    } else if (!nameParts.every(part => /^[A-Za-z]+$/.test(part))) {
        document.getElementById('name-error').textContent = 'Name must contain only letters.';
        hasErrors = true;
    }

    const email = form.email.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (email === '') {
      document.getElementById('email-error').textContent = 'Email is required.';
      hasErrors = true;
    } else if (!emailPattern.test(email)) {
      document.getElementById('email-error').textContent = 'Enter a valid email.';
      hasErrors = true;
    }

    const subject = form.subject.value.trim();
    if (subject === '') {
      document.getElementById('subject-error').textContent = 'Subject is required.';
      hasErrors = true;
    }

    const message = form.message.value.trim();
    if (message === '') {
      document.getElementById('message-error').textContent = 'Message is required.';
      hasErrors = true;
    } else if (message.length < 10) {
      document.getElementById('message-error').textContent = 'Message must be at least 10 characters.';
      hasErrors = true;
    }

    if (!hasErrors) {
      successMessage.classList.add('show');
      form.reset();

      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 5000);
    }
});
