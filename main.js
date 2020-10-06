const menu = document.querySelector('#menu');
const contSkills = document.querySelector('#skill-container')

$(document).ready(function () {
  $('body').scrollspy({ target: '.navbar', offset: 56 });

  // $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () { });

  $(document).mouseup((e) => {
    const container = $("#navbar-hide");

    if (!container.is(e.target) && container.has(e.target).length === 0 || container.has(e.target).length === 1) {
      container.collapse('hide');
    }
  });

})

const printProyects = (arrProyects) => {
  let templateProyects = '';

  // title: '',
  // img: '',
  // description: '',
  // demo: '',
  // code: '',
  // tag: ['']

  arrProyects.forEach(({ title, img, description, demo, code, tags }) => {
    templateProyects += `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3 h-100">
        <img src="${img}" class="card-img p-1" alt="${title}">
        <div class="card-body">
          <span class="card-title">${title}</span>
          <p class="card-text ">${description}</p>
          <a href="${demo}" target="_blank" class="btn text-white m-1">
            <i class="fas fa-eye mr-2"></i>Demo</a>
          <a href="${code}" target="_target" class="btn text-white m-1">
            <i class="fab fa-github mr-2"></i>Código</a>
        </div>
      </div>
    </div>`
  });
  return templateProyects;
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
    </div>`
  })
  return templateSkills.replace(/,/gi, '');
}

contSkills.innerHTML = printSkills(skills);
