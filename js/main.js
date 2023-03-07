const menuIcon = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('.menu-dropdown');

menuIcon.addEventListener('click', function () {
    menuDropdown.classList.toggle('show');
});