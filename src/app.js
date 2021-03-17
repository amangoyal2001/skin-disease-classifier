const fileInput = document.getElementById("file-input");
const image = document.getElementById("image");

const getImage = () => {
    if (!fileInput.files[0]) throw new Error("Image not found");
    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.addEventListener('load', (e) => {
        image.setAttribute("src", e.target.result);
        document.body.classList.add("image-loaded");
    })
    
    reader.readAsDataURL(file);
}

/**
 * When user uploads a new image, display the new image on the webpage
 */
fileInput.addEventListener("change", getImage);