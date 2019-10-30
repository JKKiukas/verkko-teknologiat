/* Funktio tallentaa kuvan ja sen nimen local storageen ja hakee tiedot, kun sivu ladataan uudelleen. */
var nextPicture = 0;
var nextText = 0;
window.onload = function () {
    if (localStorage.hasOwnProperty("saveImage") && localStorage.hasOwnProperty("saveText")) {
        nextPicture = localStorage.getItem("saveImage");
        nextText = localStorage.getItem("saveText")
    }
    else {
        nextPicture = 0;
        nextText = 0;
    }
    automaticShow();
    automaticText();
};

/* Funktio vaihtaa automaattisesti kuvia. */
var playPicture;
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

    localStorage.setItem("saveImage", nextPicture);

    x[nextPicture - 1].style.display = "block";
    playPicture = setTimeout(automaticShow, 2000);
}

/* Funktio vaihtaa automaattisesti kuvan nimen, kun kuva vaihtuu. */
var playText;
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

    localStorage.setItem("saveText", nextText);

    z[nextText - 1].style.display = "block";
    playText = setTimeout(automaticText, 2000);
}

/* Funktio vaihtaa kuvan, kun painaa kuvan viereisestä napista. */
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

/* Funktio pysäyttää ja laittaa esityksen takaisi päälle, kun painaa napista. */
function pausePlayPicture() {
    if (playPicture != null) {
        clearTimeout(playPicture);
        playPicture = null;
    } else {
        playPicture = setTimeout(automaticShow, 2000)
    }
}

/* Funktio pysäyttää ja laittaa tekstin takaisin päälle, kun painaa napista. */
function pausePlayText() {
    if (playText != null) {
        clearTimeout(playText);
        playText = null;
    } else {
        playText = setTimeout(automaticText, 2000)
    }
}

/* Funktio vaihtaa tekstiä, kun painaa kuvan viereisestä napista. Teksti kertoo kuvan nimen. */
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

/* Funktio vaihtaa pause / play napin iconia, kun painaa kuvan alapuolella olevasta napista. */
document.getElementById("iconButton").addEventListener("click", function (changeIcon) {
    var button = changeIcon.target;

    button.classList.toggle("fa-pause");
    button.classList.toggle("fa-play");
}, false);
