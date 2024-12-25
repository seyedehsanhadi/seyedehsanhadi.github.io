// assets/js/scripts.js

/* 
  This script handles the popup functionality for each clickable element,
  manages the sidebar toggle on smaller screens, and ensures accessibility.
*/

/* Popup Management */

// Function to show popup
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock scroll
  }
}

// Function to close popup
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Unlock scroll
  }
}

// Close popup when clicking outside the popup content
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto'; // Unlock scroll
  }
});

// Close popup with Esc key
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
      popup.style.display = 'none';
    });
    document.body.style.overflow = 'auto'; // Unlock scroll
  }
});

/* Sidebar Toggle Functionality */
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  sidebar.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
}

/* Accessibility: Focus Trap for Popups */
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      const focusableElements = popup.querySelectorAll('a, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
});
