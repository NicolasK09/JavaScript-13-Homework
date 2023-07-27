document.addEventListener('DOMContentLoaded', function() {
    const cookiesNotification = document.getElementById('cookies-notification');
    const acceptButton = document.getElementById('accept-btn');
  

    function hideNotification() {
      cookiesNotification.style.display = 'none';
    }
  

    function acceptCookies() {
      hideNotification();

    }
  
    acceptButton.addEventListener('click', acceptCookies);
  });
  