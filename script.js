import { card } from "./assets/construction.js";

document.getElementById('container').innerHTML = (card.join(''))

const FirstPanel =document.querySelector('.panel')
const panels = document.querySelectorAll('.panel')

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

FirstPanel.classList.add('active')


//remueve la clase: Active una vez seleccionado cualquier panel
function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

let currentActivate = 1

//con esta funcion al pulsar next o prev se activara el respectivo panel asignado al numero
function combination() {
    //verificamos el currentActivate
    if (currentActivate) {
        //removemos la clase activa
        removeActiveClasses()
        //asignamos al panel correspondiente la clase activa
        panels[currentActivate-1].classList.add('active')
    } 
}


//agrega la clase active a cualquier panel que se seleccione
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        //al panel selecciondo se le agrega la clase active
        panel.classList.add('active')

        //segun el panel seleccionado se activaran los circulos con la funcion update correspondiente
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


//agregado evento click al botton next
next.addEventListener('click', () => {
    currentActivate++

    if (currentActivate > circles.length) {
        currentActivate = circles.length
        
    }
    //llamamos la funcion combination para que tanto al seleccionar un panel o presionar next/prev se activen las clases correspondientes tanto en panel como en circulos
    combination()
    //llamanos la funcion update para la activacion de los circulos
    update()
})

//agregado evento click al botton prev
prev.addEventListener('click', () => {
    currentActivate--

    if (currentActivate < 1) {
        currentActivate = circles.length
    }
    //llamamos la funcion combination para que tanto al seleccionar un panel o presionar next/prev se activen las clases correspondientes tanto en panel como en circulos
    combination()
    //llamanos la funcion update para la activacion de los circulos
    update()
})

//con esta funcion desactivaremos los bottones
function update() {
    // depende el panel seleccionado se resalatara el circulo correpondiente
    circles.forEach((circle, idx) => {
        if (idx < currentActivate) {
            circle.classList.add('actived')
        } else {
            circle.classList.remove('actived')
        }
    });

    const actives = document.querySelectorAll('.actived')
    
    //se modifica el archivo style para que la barra azul alcanze el respectivo circulo de su respectivo panel
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100+'%' 

    //si el primer o el ultimo panel estan seleccionados los botones se desactivaran
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