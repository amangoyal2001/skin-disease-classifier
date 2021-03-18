var loader = document.querySelector('.loader')

window.addEventListener('load', () => {
    loader.classList.add('hide-loader')
})

var cross = document.querySelector('.cross')
var popup = document.querySelector('.instructions')
cross.addEventListener('click', () => {
    popup.classList.add('display-none')
})

