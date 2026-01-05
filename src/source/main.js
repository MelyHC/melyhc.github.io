import { aboutMe, proyects, } from master;
console.log(proyects)
// import { proyects } from master.proyects.route;

const menu = document.querySelector('#menu');
const contContact = document.querySelector('#contact-container');
const contSkills = document.querySelector('#skill-container');

$(document).ready(function () {
  $('body').scrollspy({ target: '.navbar', offset: 58, metod: 'auto' });

  $(document).mouseup((e) => {
    const container = $("#navbar-hide");

    if (!container.is(e.target) && container.has(e.target).length === 0 || container.has(e.target).length === 1)
      container.collapse('hide');
  });
});

const scroll = new SmoothScroll('a[href*="#"]');






console.log(master.proyects.route)

contProyects.innerHTML = printProyects(proyects);
