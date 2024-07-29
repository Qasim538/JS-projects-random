const btn = document.querySelector('.button')
const span = document.querySelector('span')


btn.addEventListener('click', () => {
    const pormptEl = prompt('Enter you name')
    span.innerText = pormptEl
})