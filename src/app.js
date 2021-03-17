const fileInput = document.getElementById("file-input");
const image = document.getElementById("image");
let model;

function classifyImage() {
    model.classify(image).then((predictions) => {
        displayDescription(predictions);
    });
}

const getImage = () => {
    if (!fileInput.files[0]) throw new Error("Image not found");
    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.addEventListener('load', (e) => {
        image.setAttribute("src", e.target.result);
        document.body.classList.add("image-loaded");

        const imageElement = new Image();
        imageElement.src = dataUrl;

        // When image object is loaded
        imageElement.onload = function () {
            // Set <img /> attributes
            image.setAttribute("src", this.src);
            image.setAttribute("height", this.height);
            image.setAttribute("width", this.width);

            // Classify image
            classifyImage();
        };
    })

    reader.readAsDataURL(file);
}

mobilenet.load().then((m) => {
    
    model = m;
    // document.body.classList.remove("loading");
    fileInput.addEventListener("change", getImage);

});
