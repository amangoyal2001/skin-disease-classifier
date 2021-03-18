var loader = document.querySelector('.loader')

navigator.getUserMedia = (navigator.getUserMedia || // use the proper vendor prefix
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

navigator.getUserMedia({ video: true }, function () {
    loader.classList.add('hide-loader')
}, function () {
    alert('You need to give permission to use this service.')
    location.reload()
});

var cross = document.querySelector('.cross')
var popup = document.querySelector('.instructions')
cross.addEventListener('click', () => {
    popup.classList.add('display-none')
})

