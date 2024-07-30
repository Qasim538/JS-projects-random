const navElement = document.querySelector("nav");
const navbarLinks = document.querySelectorAll("a");
const sectionElements = document.querySelectorAll("section");

const removeActiveLinks = () => {
  navbarLinks.forEach((link) => link.parentElement.classList.remove("active"));
};

const hideSection = () => {
  sectionElements.forEach((section) =>
    section.classList.add("hidden")
  );
};

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveLinks();
    hideSection();

    link.parentElement.classList.add('active')

    const sectionElements = document.querySelector(link.hash)
    sectionElements.classList.remove('hidden')
 
  });
});
