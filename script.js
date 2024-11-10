function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  });
  