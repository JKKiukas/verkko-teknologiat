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
}

function increaseFirstValue() {
    var value = parseInt(document.getElementById("getFirstNumber").value);
    value++;
    document.getElementById("getFirstNumber").value = value;

    if (value > 9) {
        document.getElementById("firstButtonPlus").disabled = true;
    }
}

function decreaseSecondValue() {
    var value = parseInt(document.getElementById("getSecondNumber").value);
    value--;
    document.getElementById("getSecondNumber").value = value;

    if (value < 2) {
        document.getElementById("secondButtonMinus").disabled = true;
    }
}

function increaseSecondValue() {
    var value = parseInt(document.getElementById("getSecondNumber").value);
    value++;
    document.getElementById("getSecondNumber").value = value;

    if (value > 9) {
        document.getElementById("secondButtonPlus").disabled = true;
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
