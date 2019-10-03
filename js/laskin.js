window.onload = function () {
    document.getElementById("getFirstNumber").value = Math.floor(Math.random() * 10) + 1; /* Antaa
   satunnaisen luvun väliltä 1-10. */

    document.getElementById("getSecondNumber").value = Math.floor(Math.random() * 10) + 1;

    var firstNumber = document.getElementById("getFirstNumber").value;
    var secondNumber = document.getElementById("getSecondNumber").value;

    /* Jos luku on sivun ladattua 10, sitä ei voi suurentaa. */
    if (firstNumber > 9) {
        document.getElementById("firstButtonPlus").disabled = true;
    }
    if (secondNumber > 9) {
        document.getElementById("secondButtonPlus").disabled = true;
    }

    /* Jos luku on sivun ladattua 1, sitä ei voi pienentää. */
    if (firstNumber < 2) {
        document.getElementById("firstButtonMinus").disabled = true;
    }
    if (secondNumber < 2) {
        document.getElementById("secondButtonMinus").disabled = true;
    }
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
    var operator = document.getElementById("selectOperator").value;
    document.getElementById("resultAmount").value++;

    if (operator === "plusSign") {
        document.getElementById("result").value = parseInt(firstNumber) + parseInt(secondNumber);
        console.log(firstNumber, "+", secondNumber, "=", parseInt(firstNumber) + parseInt(secondNumber));
    }
    if (operator === "minusSign") {
        document.getElementById("result").value = firstNumber - secondNumber;
        console.log(firstNumber, "-", secondNumber, "=", firstNumber - secondNumber);
    }
    if (operator === "multiplyingSign") {
        document.getElementById("result").value = firstNumber * secondNumber;
        console.log(firstNumber, "*", secondNumber, "=", firstNumber * secondNumber);
    }
    if (operator === "divisionSign") {
        document.getElementById("result").value = firstNumber / secondNumber;
        console.log(firstNumber, "/", secondNumber, "=", firstNumber / secondNumber);
    }
}
