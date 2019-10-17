var nextPicture = 0;
var playPicture;
automaticShow();

function automaticShow() {
    var i;
    var x = document.getElementsByClassName("slideShow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    nextPicture++;
    if (nextPicture > x.length) {
        nextPicture = 1
    }
    x[nextPicture - 1].style.display = "block";
    playPicture = setTimeout(automaticShow, 2000);
}

var nextText = 0;
var playText;
automaticText();

function automaticText() {
    var j;
    var z = document.getElementsByClassName("nameOfCat");
    for (j = 0; j < z.length; j++) {
        z[j].style.display = "none";
    }
    nextText++;
    if (nextText > z.length) {
        nextText = 1
    }
    z[nextText - 1].style.display = "block";
    playText = setTimeout(automaticText, 2000);
}

var slidePic = 1;
displayPicture(slidePic);

function newPicture(pic) {
    displayPicture(slidePic += pic);
}

function displayPicture(pic) {
    var i;
    var getPicture = document.getElementsByClassName("slideShow");
    if (pic > getPicture.length) {
        slidePic = 1
    }
    if (pic < 1) {
        slidePic = getPicture.length
    }
    for (i = 0; i < getPicture.length; i++) {
        getPicture[i].style.display = "none";
    }
    getPicture[slidePic - 1].style.display = "block";
}

function pausePlayPicture() {
    if (playPicture != null) {
        clearTimeout(playPicture);
        playPicture = null;
    } else {
        playPicture = setTimeout(automaticShow, 2000)
    }
}

function pausePlayText() {
    if (playText != null) {
        clearTimeout(playText);
        playText = null;
    } else {
        playText = setTimeout(automaticText, 2000)
    }
}

var textSlide = 1;
showText(textSlide);

function newText(x) {
    showText(textSlide += x);
}

function showText(x) {
    var i;
    var slides = document.getElementsByClassName("nameOfCat");
    if (x > slides.length) {
        textSlide = 1
    }
    if (x < 1) {
        textSlide = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[textSlide - 1].style.display = "block";
}
