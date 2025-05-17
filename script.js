// script.js

// Simple page load message
console.log("Risi Madiki Portfolio Loaded");

// Smooth scroll behavior for future internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
