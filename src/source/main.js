import { aboutMe, proyects, } from master;
console.log(proyects)
// import { proyects } from master.proyects.route;

const menu = document.querySelector('#menu');
const contContact = document.querySelector('#contact-container');
const contProyects = document.querySelector('#proyects-container');
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

const printInfoContact = (arrInfoContact => {
  let templateInfoContact = '';

  // href: '',
  // target: '',
  // icon: '',
  // description: ''

  templateInfoContact +=
    `<div class="container d-flex flex-column align-items-center mt-2">
      <div class="mb-5">`;

  arrInfoContact.forEach(({ classDes, description, href, icon, target }) => {
    templateInfoContact += `
      <div class="p-3">
        <a class="media" href="${href}" ${target}>
          <i class="${icon} mr-2 ml-3 icon-md"></i>
            <span class="${classDes}">${description}</span>
        </a>
      </div>`;
  });

  templateInfoContact += `
      </div>
    </div>`

  return templateInfoContact;
});

const printProyects = (arrProyects) => {
  let templateProyects = '';

  // title: '',
  // img: '',
  // description: '',
  // demo: '',
  // code: '',
  // tag: ['']

  templateProyects += '<div class="row row-cols-1 row-cols-md-3 mr-2 ml-2 mt-4 pb-5">';

  arrProyects.forEach(({ title, img, description, demo, code, tags }) => {
    templateProyects += `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card mb-3 h-100 border-0">
        <img src="${img}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <span class="card-title">${title}</span>
          <p class="card-text my-1 font-weight-light text-justify">
          ${tags.map(({ icon, label }) => `
            <span class="badge badge-light font-weight-light">
              <i class="${icon}"></i>
              ${label}
            </span>`)
      }
          </p>
          <p class="card-text text-justify">${description}</p>
          <a href="${demo}" target="_blank" class="btn btn-purple text-white m-1">
            <i class="fas fa-eye text-white mr-2"></i>Demo</a>
          <a href="${code}" target="_target" class="btn btn-purple text-white m-1">
            <i class="fab fa-github text-white mr-2"></i>Código</a>
        </div>
      </div>
    </div>`
  });

  templateProyects += '</div>';

  return templateProyects.replace(/,/gi, '');
};

const printSkills = (arrSkills) => {
  let templateSkills = '';

  // type: '',
  // skills: [{
  //   name: '',
  //   icon: 'fab fa-...'
  // }]

  arrSkills.forEach(({ type, skills }) => {
    templateSkills += `
    <div class="my-5">
      <h3 class="text-domine">${type}</h3>
      <div class="row justify-content-center align-items-center">
      ${skills.map(({ icon, name }) =>
      `<div class="col col-md-3 p-0">
          <div class="px-2 m-4 pad-border d-flex flex-column justify-content-center align-items-center">
            <i class="${icon} icon-lg"></i>
            <span class="font-weight-bold">${name}</span>
          </div>
        </div>`)
      }
      </div>
    </div>`
  })
  return templateSkills.replace(/,/gi, '');
};
console.log(master.proyects.route)

contProyects.innerHTML = printProyects(proyects);
contSkills.innerHTML = printSkills(skills);
contContact.innerHTML = printInfoContact(contact);
