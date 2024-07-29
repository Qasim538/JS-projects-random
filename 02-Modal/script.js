const btn = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')

btn.addEventListener('click', () => {
    modal.classList.add('open')
})


modalContent.addEventListener('click', () => {
    modal.classList.remove('open')
    
})


