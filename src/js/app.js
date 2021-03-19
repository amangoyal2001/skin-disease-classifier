$(document).ready(async function () {
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').attr("src", e.target.result).hide().fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imageUpload").change(function () {

        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('').hide();
        readURL(this);
    });

    // Showing all possible results
    function showResults(result) {
        $('.loader').hide();
        $('#result').fadeIn(600).text(result[0].className + '  -   ' + result[0].probability.toFixed(3));
    }

    // The classifier
    var classifier
    let modelURL = 'https://teachablemachine.withgoogle.com/models/4pbv0d_vM/'
    var label

    // STEP 1: Load the model!
    function preload() {
        classifier = ml5.imageClassifier(modelURL + 'model.json')
    }

    function gotResults(error, results) {
        // Something went wrong!
        if (error) {
            console.error(error)
            return
        }
        // Store the label and classify again!
        label = results[0].label

        console.log(label);
    }

    function classifyVideo(img) {
        classifier.classify(img, gotResults)
    }    

    preload()
    // Predict
    $('#btn-predict').click(async function () {

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make a prediction through the model on our image.
        const imgEl = document.getElementById('imagePreview');
        classifyVideo(imgEl)

    });

});