const navEl = document.querySelector('nav')
const navbarLinks = document.querySelectorAll('a')

const navPosition = navEl.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    navEl.style.top = scrollPosition + 'px'

    navbarLinks.forEach(link => {

        sectionElement = document.querySelector(link.hash)

        if(scrollPosition > sectionElement.offsetTop && scrollPosition < sectionElement.offsetTop + sectionElement.offsetHeight) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    
    })


})