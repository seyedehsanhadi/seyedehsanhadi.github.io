// assets/js/portfolio.js

/* 
  This script handles the popup functionality for each project card 
  and prevents background scrolling when a popup is displayed.
*/

// Utility Functions
function lockScroll() {
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.body.style.overflow = 'auto';
}

// Show a specific project's popup
function showProjectPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'flex';
    lockScroll();
  }
}

// Close a specific project's popup
function closeProjectPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'none';
    unlockScroll();
  }
}

// Close popup if clicking outside the popup content
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-popup')) {
    e.target.style.display = 'none';
    unlockScroll();
  }
});

// Close popup with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const popups = document.querySelectorAll('.project-popup');
    popups.forEach((popup) => {
      popup.style.display = 'none';
    });
    unlockScroll();
  }
});
