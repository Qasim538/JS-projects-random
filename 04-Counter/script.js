const addButtonEl = document.getElementById('counterAdd')
const subButtonEl = document.getElementById('counterSub')
const counterDisplayEl = document.getElementById('counterDisplay')


let total = 0


addButtonEl.addEventListener('click', () => {
    total ++
    countDisplay()
})
subButtonEl.addEventListener('click', () => {
    total --
    countDisplay()
})

function countDisplay() {
    counterDisplayEl.innerText = total
}

