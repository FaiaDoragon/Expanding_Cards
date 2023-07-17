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

let currentActivate = 1

function combination() {
    if (currentActivate) {
        removeActiveClasses()
        panels[currentActivate-1].classList.add('active')
    } 
}



panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')

        if (panels[0].classList.contains('active')) {
            currentActivate = 1
            update()
        } else if (panels[1].classList.contains('active')) {
            currentActivate = 2
            update()
        } else if (panels[2].classList.contains('active')) {
            currentActivate = 3
            update()
        } else if (panels[3].classList.contains('active')) {
            currentActivate = 4
            update()
        } else if (panels[4].classList.contains('active')) {
            currentActivate = 5
            update()
        }
    })
    
})



next.addEventListener('click', () => {
    currentActivate++

    if (currentActivate > circles.length) {
        currentActivate = circles.length
        
    }

    combination()
    update()
})

prev.addEventListener('click', () => {
    currentActivate--

    if (currentActivate < 1) {
        currentActivate = circles.length
    }
    combination()
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
        next.disabled = false
    } else if (currentActivate === circles.length) {
        prev.disabled = false
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}