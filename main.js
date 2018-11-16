
const navbar = document.querySelector('#navbarNavAltMarkup');
const menu = document.querySelector('#menu');

// navbar.addEventListener('click', () => menu.click())
$('body').scrollspy().init();

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function (e) {
 console.log(e)
})