/* assets/js/scripts.js */

// Function to show popup
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'flex';
  }
}

// Function to close popup
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = 'none';
  }
}

// Close popup when clicking outside the popup content
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
  }
});

// Accordion Functionality
document.querySelectorAll('.accordion').forEach(function(acc) {
  acc.addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Popup Functionality using Event Delegation
document.addEventListener('click', function(event) {
  // Check if the clicked element or its parent has the 'clickable' class
  const clickableElement = event.target.closest('.clickable');
  if (clickableElement) {
    const popupIdMatch = clickableElement.getAttribute('onclick').match(/'([^']+)'/);
    if (popupIdMatch && popupIdMatch[1]) {
      const popupId = popupIdMatch[1];
      showPopup(popupId);
    }
  }
});
