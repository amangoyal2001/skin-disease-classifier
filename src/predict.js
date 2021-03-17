const createFileReader = () => {
    const reader = new FileReader()
    var displayImage = document.querySelector('#img-display')

    reader.addEventListener('load', () => {
        const dataUrl = reader.result
        displayImage.src = dataUrl
    })

    let file = image.releasePointerCapture('files')[0]
    reader.readAsDataURL(file)
}

var image = document.querySelector('#img-input')
image.addEventListener('change', createFileReader)

let model;
$(document).ready(async () => {
    $('.progress-bar').show()
    model = await tf.loadGraphModel('model/model.json')
    $('.progress-bar').hide()
})