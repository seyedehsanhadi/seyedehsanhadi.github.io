/* assets/js/portfolio.js */

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
    popup.setAttribute('aria-hidden', 'false');
    lockScroll();
    // Move focus to the popup for accessibility
    const firstFocusableElement = popup.querySelector('.popup-content');
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }
  }
}

// Close a specific project's popup
function closeProjectPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden', 'true');
    unlockScroll();
    // Return focus to the back button
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
      backBtn.focus();
    }
  }
}

// Close popup if clicking outside the popup content
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-popup')) {
    e.target.style.display = 'none';
    e.target.setAttribute('aria-hidden', 'true');
    unlockScroll();
  }
});

// Close popup with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const popups = document.querySelectorAll('.project-popup');
    popups.forEach((popup) => {
      popup.style.display = 'none';
      popup.setAttribute('aria-hidden', 'true');
    });
    unlockScroll();
    // Return focus to the back button
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
      backBtn.focus();
    }
  }
});
