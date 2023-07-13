import { card } from "./assets/construction.js";

document.getElementById('container').innerHTML = (card.join(''))

const FirstPanel =document.querySelector('.panel')
const panels = document.querySelectorAll('.panel')

FirstPanel.classList.add('active')

function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})