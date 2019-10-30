var elements = document.getElementsByClassName("box");

var changeView;

function listView() {
    for (changeView = 0; changeView < elements.length; changeView++) {
        elements[changeView].style.width = "51%";
    }
}

function gridView() {
    for (changeView = 0; changeView < elements.length; changeView++) {
        elements[changeView].style.width = "50%";
    }
}
