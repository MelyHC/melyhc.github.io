// $('body').scrollspy({ target: '#navbar-example' });
const navbar = document.querySelector('#navbarNavAltMarkup');
const menu = document.querySelector('#menu');

navbar.addEventListener('click', () => menu.click())

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {

})