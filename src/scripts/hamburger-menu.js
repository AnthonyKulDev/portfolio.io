const hamburgerMenuLink = document.querySelector('.hamburger-menu-link');
const hamburgerMenuItem = document.querySelectorAll('a.nav__link');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const closeButton = document.querySelector('.hamburger-menu__close');

hamburgerMenuLink.addEventListener('click', function () {
  hamburgerMenu.classList.add('hamburger-menu_visible');
});

hamburgerMenuItem.forEach(function(element) {
  element.addEventListener("click", function() {
    hamburgerMenu.classList.remove('hamburger-menu_visible'); 
  });
});

closeButton.addEventListener('click', function() {
  setTimeout(function () {
    hamburgerMenu.classList.remove('hamburger-menu_visible');     
  }, 30);
});