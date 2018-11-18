const navbar = document.querySelector('#navbarNavAltMarkup');
const menu = document.querySelector('#menu');

$(document).ready(function () {
  $('body').scrollspy({ target: ".navbar", offset: 56, scrollHeight: 56 });
})

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
})

navbar.addEventListener('click', () => {
  if (window.innerWidth < '768') menu.click()
})
