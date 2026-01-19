const sections = document.querySelectorAll('#main-content section');


const observerOptions = {
  rootMargin: '-58px 0px 0px 0px',
  threshold: 0.3
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting)
      const currentSectionId = entry.target.id;

      history.replaceState(null, null, `#${currentSectionId}`);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

const scrollActive = (e) => {
  const container = document.querySelector("#navbar-hide");
  let elValidated;

  if (e.type === "click") {
    const { classList } = e.target;
    const arrClassListValues = Object.values(classList);

    const validatedClass = ["nav-item", "nav-link", "scroll-link"];

    elValidated = arrClassListValues.find((e) =>
      validatedClass.includes(e),
    );
  } else {
    // observer.observe(container)
    // history.pushState(null, '', "#contact")
    // console.log(e.target)
  }

  if (elValidated || container.classList.contains("show"))
    container.classList.remove("show");
}

document.addEventListener("click", scrollActive);
document.addEventListener("scroll", scrollActive);