var nextPicture = 0;
var stopPicture;
automaticShow();

function automaticShow() {
    var i;
    var x = document.getElementsByClassName("slideShow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    nextPicture++;
    if (nextPicture > x.length) {nextPicture = 1}
    x[nextPicture-1].style.display = "block";
    stopPicture = setTimeout(automaticShow, 2000);
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

function pausePicture() {
    clearTimeout(stopPicture);
}


function playPicture() {
    setTimeout(automaticShow, 2000);
}
