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
    // Set focus to the popup for accessibility
    const firstFocusable = popup.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      firstFocusable.focus();
    }
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
  sidebar.classList.toggle('visible');
  hamburgerMenu.classList.toggle('active');
}

/* Accessibility: Focus Trap for Popups */
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      const focusableElements = popup.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
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

/* Reveal Animations on Scroll */
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.header, section h2, .card, .education-degree, .experience-degree, .publication-card, .skill-category, .info-card, .publications-container');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observerInstance.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => {
    observer.observe(el);
  });
});
