window.onload = function () {
    document.getElementById("getFirstNumber").value = Math.floor(Math.random() * 10) + 1; /* Antaa
   satunnaisen luvun väliltä 1-10. */

    document.getElementById("getSecondNumber").value = Math.floor(Math.random() * 10) + 1;
};

function decreaseFirstValue() {
    var value = parseInt(document.getElementById("getFirstNumber").value);
    value--;
    document.getElementById("getFirstNumber").value = value;
}

function increaseFirstValue() {
    var value = parseInt(document.getElementById("getFirstNumber").value);
    value++;
    document.getElementById("getFirstNumber").value = value;
}

function decreaseSecondValue() {
    var value = parseInt(document.getElementById("getSecondNumber").value);
    value--;
    document.getElementById("getSecondNumber").value = value;
}

function increaseSecondValue() {
    var value = parseInt(document.getElementById("getSecondNumber").value);
    value++;
    document.getElementById("getSecondNumber").value = value;
}
