window.onload = function () {
    document.getElementById("getFirstNumber").value = Math.floor(Math.random() * 10) + 1; /* Antaa
   satunnaisen luvun väliltä 1-10. */

    document.getElementById("getSecondNumber").value = Math.floor(Math.random() * 10) + 1;
};

function decreaseFirstValue() {
    var value = parseInt(document.getElementById("getFirstNumber").value);
    value--;
    document.getElementById("getFirstNumber").value = value;

    if (value < 2) {
        document.getElementById("firstButtonMinus").disabled = true;
    }
    if (value < 9) {
        document.getElementById("firstButtonPlus").disabled = false;
    }
}

function increaseFirstValue() {
    var value = parseInt(document.getElementById("getFirstNumber").value);
    value++;
    document.getElementById("getFirstNumber").value = value;

    if (value > 9) {
        document.getElementById("firstButtonPlus").disabled = true;
    }
    if (value > 1) {
        document.getElementById("firstButtonMinus").disabled = false;
    }
}

function decreaseSecondValue() {
    var value = parseInt(document.getElementById("getSecondNumber").value);
    value--;
    document.getElementById("getSecondNumber").value = value;

    if (value < 2) {
        document.getElementById("secondButtonMinus").disabled = true;
    }
    if (value < 9) {
        document.getElementById("secondButtonPlus").disabled = false;
    }
}

function increaseSecondValue() {
    var value = parseInt(document.getElementById("getSecondNumber").value);
    value++;
    document.getElementById("getSecondNumber").value = value;

    if (value > 9) {
        document.getElementById("secondButtonPlus").disabled = true;
    }
    if (value > 1) {
        document.getElementById("secondButtonMinus").disabled = false;
    }
}

function calculateNumbers() {
    var firstNumber = document.getElementById("getFirstNumber").value;
    var secondNumber = document.getElementById("getSecondNumber").value;
    var value = document.getElementById("selectOperator").value;

    if (value === "plusSign") {
        console.log(parseInt(firstNumber) + parseInt(secondNumber));
        document.getElementById("result").value = parseInt(firstNumber) + parseInt(secondNumber);
    }
    if (value === "minusSign") {
        console.log(firstNumber - secondNumber);
        document.getElementById("result").value = parseInt(firstNumber) - parseInt(secondNumber);
    }
    if (value === "multiplyingSign") {
        console.log(firstNumber * secondNumber);
        document.getElementById("result").value = parseInt(firstNumber) * parseInt(secondNumber);
    }
    if (value === "divisionSign") {
        console.log(firstNumber / secondNumber);
        document.getElementById("result").value = parseInt(firstNumber) / parseInt(secondNumber);
    }
}
