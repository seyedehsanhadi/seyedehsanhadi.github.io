// portfolio.js

// Function to show the project popup
function showProjectPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    popup.setAttribute('aria-hidden', 'false');
    // Focus on the popup for accessibility
    popup.querySelector('.popup-content').focus();
  }
}

// Function to close the project popup
function closeProjectPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
    popup.setAttribute('aria-hidden', 'true');
  }
}

// Close popup when clicking outside the content
document.addEventListener('click', function(event) {
  const popups = document.querySelectorAll('.project-popup');
  popups.forEach(popup => {
    if (event.target === popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
      popup.setAttribute('aria-hidden', 'true');
    }
  });
});

// Close popup on pressing the Esc key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const popups = document.querySelectorAll('.project-popup');
    popups.forEach(popup => {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
      popup.setAttribute('aria-hidden', 'true');
    });
  }
});
