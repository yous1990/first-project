var photos = ["accueil", "fusee", "script", "nuage", "hello", "www"];
var currentPos = 0;

var album = document.getElementById('album');

function nextImage() {
    if (currentPos == 5) {

        currentPos = 0;
    }
    else {
        currentPos++;
    }
    console.log();
    album.src = "photos/" + photos[currentPos] + ".jpg";
}
function previousImage() {
    if (currentPos == 0) {
        currentPos = 5;
    }
    else {
        currentPos--;
    }
    album.src = "photos/" + photos[currentPos] + ".jpg";
}