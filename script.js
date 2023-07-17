import { card } from "./assets/construction.js";

document.getElementById('container').innerHTML = (card.join(''))

const FirstPanel =document.querySelector('.panel')
const panels = document.querySelectorAll('.panel')

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

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

let currentActivate = 1

next.addEventListener('click', () => {
    currentActivate++

    if (currentActivate > circles.length) {
        currentActivate = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActivate--

    if (currentActivate < 1) {
        currentActivate = circles.length
    }

    update()

})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActivate) {
            circle.classList.add('actived')
        } else {
            circle.classList.remove('actived')
        }
    });

    const actives = document.querySelectorAll('.actived')
    
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100+'%' 

    if (currentActivate === 1) {
        prev.disabled = true
    } else if (currentActivate === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}