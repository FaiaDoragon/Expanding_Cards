const menuOpen = document.getElementById('open')
const menuClose = document.getElementById('close')
const nav = document.getElementById('nav')

const search = document.querySelector('.search')
const btn = document.querySelector('.btn-search')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

//agregamos la funcionalidad de abrir el menu al botton open
menuOpen.addEventListener('click', () => {
    nav.classList.add('show-nav')
})

//agregamos la funcionalidad de cerrar el menu al botton close
menuClose.addEventListener('click', () => {
    nav.classList.remove('show-nav')
    search.classList.remove('active')
})
