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
