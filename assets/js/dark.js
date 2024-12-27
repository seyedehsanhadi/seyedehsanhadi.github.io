// assets/js/scripts.js

// Function to show a specific popup
function showPopup(id) {
  document.getElementById(id).style.display = 'flex';
}

// Function to close a specific popup
function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

// Function to close all popups
function closeAllPopups() {
  document.querySelectorAll('.popup').forEach(popup => {
    popup.style.display = 'none';
  });
}

// Close all popups when pressing the Esc key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeAllPopups();
  }
});

// Smooth Scrolling for Navigation Links (if any)
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close sidebar on mobile after clicking (if applicable)
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  });
});

// Example of toggling sidebar (if you retain sidebar elements)
/*
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
  document.querySelector('.hamburger-menu').classList.toggle('active');
}
*/
