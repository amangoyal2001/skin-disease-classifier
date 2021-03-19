var preLoader = document.querySelector('.pre-loader')

window.addEventListener('load', () => {
    preLoader.classList.add('hide-loader')
    $('.selectFile-container').hide()
})


var chooseBtns = document.querySelectorAll('.btn-choose')
for (let i = 0; i < chooseBtns.length; i++) {
    chooseBtns[i].addEventListener('click', () => {

        $('.choose-pref').hide()
         
        if (chooseBtns[i].getAttribute('data-target') == 'import') {
            $('.selectFile-container').show()
        }
        else{
            
        }
    })
}