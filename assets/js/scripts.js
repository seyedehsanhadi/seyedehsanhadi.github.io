/* assets/js/scripts.js */

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

// Accordion Functionality
document.querySelectorAll('.accordion').forEach(function(acc) {
  acc.addEventListener('click', function() {
    // Close all other accordion panels
    document.querySelectorAll('.accordion').forEach(function(otherAcc) {
      if (otherAcc !== acc) {
        otherAcc.classList.remove('active');
                const otherPanel = otherAcc.nextElementSibling;
                if (otherPanel) {
                  otherPanel.style.maxHeight = null;
                }
      }
    });

    // Toggle current accordion
    acc.classList.toggle('active');
    const panel = acc.nextElementSibling;
    if (panel) {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
});

// Popup Functionality using Event Delegation
document.addEventListener('click', function(event) {
  // Check if the clicked element or its parent has the 'clickable' class
  const clickableElement = event.target.closest('.clickable');
  if (clickableElement) {
    const onclickAttr = clickableElement.getAttribute('onclick');
    const popupIdMatch = onclickAttr ? onclickAttr.match(/'([^']+)'/) : null;
    if (popupIdMatch && popupIdMatch[1]) {
      const popupId = popupIdMatch[1];
      showPopup(popupId);
    }
  }
});
