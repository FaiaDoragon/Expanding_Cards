const menuOpen = document.getElementById('open')
const menuClose = document.getElementById('close')
const nav = document.getElementById('nav')

//agregamos la funcionalidad de abrir el menu al botton open
menuOpen.addEventListener('click', () => {
    nav.classList.add('show-nav')
})

//agregamos la funcionalidad de cerrar el menu al botton close
menuClose.addEventListener('click', () => {
    nav.classList.remove('show-nav')
})