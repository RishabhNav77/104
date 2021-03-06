
Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_image' src=" + data_uri + ">";

    });
}

console.log("ML5 version : ",ml5.version);
classifier = ml5.imageClassifier("//https://teachablemachine.withgoogle.com/models/Ty5URMQkH/",modelLoaded);
function modelLoaded() {
    console.log("model is Loaded");
}